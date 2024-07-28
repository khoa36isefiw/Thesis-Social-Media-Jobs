import React, { useRef, useState } from 'react';
import { Box, Typography, Avatar, Divider, Modal, Button, IconButton, Grid } from '@mui/material';
import { mobileScreen } from '../Theme/Theme';
import { PostActionButton } from './PostActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, setReactionOnPost } from '../../redux/ManagePost/managePostAction';
import { blue } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import Liked from '../../assets/images/like.png';
import Love from '../../assets/images/love.png';
import Laugh from '../../assets/images/laughing.png';
import CommentModal from './CommentModal';
import PostMenuSettings from './PostMenuSettings';
import HideThePost from './HideThePost';

import UserAvatar from '../../assets/images/avatar.jpeg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CommentsData } from './CommentsData';
import { postMenuSettings } from './Data/PostMenuSettingDatas';
import { CommentTextField } from './CommentTextField';

import { calculateTimeElapsed } from '../HandleTime/HandleTime';

import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ShowVideoUploaded from '../ShowVideoUploaded/ShowVideoUploaded';
import { useLoggedInUser } from '../CallDataInRedux/CallDataInRedux';

// definde typograph for this component
export const CustomTypography = ({ children }) => (
    <Typography
        sx={{
            ml: '8px',
            fontSize: '13px',
            '&:hover': {
                cursor: 'pointer',
                color: '#0b66c2',
                textDecoration: 'underline',
                fontWeight: 'bold',
            },
        }}
    >
        {/* 88 comments */}
        {children}
    </Typography>
);

function Post({
    postID,
    avatarSrc,
    displayName,
    followers,
    time,
    hashtag,
    content,
    numberOfReaction,
    numberOfComment,
    imageUrl,
    viewPostPermission,
}) {
    // Check content is always an array?
    const dispatch = useDispatch();
    const date = new Date();
    const commentTextFieldRef = useRef(null);

    const [menuStatus, setMenuStatus] = useState(null);
    const contentArray = Array.isArray(content) ? content : [content];
    const [expanded, setExpanded] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [hideThePostSelected, setHideThePostSelected] = useState(false);
    const [isOpenCommentRegion, setIsOpenCommentRegion] = useState(false);
    const [isEmptyCommentField, setIsEmptyCommentField] = useState(true);
    const [showPicker, setShowPicker] = useState(false); // add and show emoji picker
    // upload image from comment
    const [imageURL, setImageURL] = useState(null);
    const [showIconUploadImage, setShowIconUploadImage] = useState(true);
    const selectedReaction = useSelector((state) => state.managePost.reactions[postID]);
    console.log('selectedReaction: ', selectedReaction);
    // update the current time for each posts
    // const [currentTimestamp, setCurrentTimestamp] = useState(new Date());
    // get the number of comments
    const commentList = useSelector((state) => state.managePost.comments[postID]);
    const getCommentListLength = commentList && commentList !== null ? commentList.length : 0;
    const authenticatedInformation = useLoggedInUser();

    console.log('authenticatedInformation: ', authenticatedInformation);

    const toggleExpanded = () => {
        // console.log('Before clicking: ', expanded);
        setExpanded(!expanded);
        // console.log('After clicking: ', expanded);
    };

    const handleImageClick = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleChooseReaction = () => {
        // dispatch(setReactionOnPost(postID, reaction));
        dispatch(setReactionOnPost(postID));

        // console.log('Post has ID reaction on is: ', postID);
    };

    // open menu setting for post
    const handleOpenPostMenuSettings = (event) => {
        setMenuStatus(event.currentTarget);
        // setMenuStatus({ anchorEl: event.currentTarget, postId: postID });
    };

    const handleClosePostMenuSettings = () => {
        setMenuStatus(null);
        // setMenuStatus({ anchorEl: null, postId: null });
    };

    const handleHideThePostSelected = () => {
        setHideThePostSelected(true);
    };

    const handleShowThePostJustHidden = () => {
        setHideThePostSelected(false);
    };

    const handleOpenCommentRegion = () => {
        setIsOpenCommentRegion(true);
        // condition to check when button comment is clicked --> It will auto focus on textfield comment
        setTimeout(() => {
            // use this because this setIsOpenCommentRegion occures before commentTextFieldRef running
            if (commentTextFieldRef.current) {
                commentTextFieldRef.current.focus();
            }
        }, 0);
    };

    // for textfield
    const handleCommentTextFieldChange = () => {
        const commentTextValue = commentTextFieldRef.current.value;

        setIsEmptyCommentField(commentTextValue.trim() === '');
    };

    // for text field
    const handleCommentSubmit = () => {
        let timeStamp = date.toISOString();
        const userName = authenticatedInformation.lastName
            ? authenticatedInformation.lastName + ' ' + authenticatedInformation.firstName
            : authenticatedInformation;
        const userAvatar = authenticatedInformation.userPhoto;

        const commentText = commentTextFieldRef.current.value.trim();
        const userInfor = {
            userName,
            userPhoto: userAvatar,
        };
        // const commentText = commentTextFieldRef.current.value;
        let commentSent = null;
        if (imageURL !== null) {
            commentSent = [commentText, imageURL.url, timeStamp];
            dispatch(addComment(postID, commentSent, userInfor));
            commentTextFieldRef.current.value = '';
            setIsEmptyCommentField(true);
            setImageURL(null);
        } else {
            if (commentText !== '') {
                commentSent = [commentText, timeStamp];

                // dispatch(addComment(postID, commentText));
                dispatch(addComment(postID, commentSent, userInfor));
                // clear input after submitting
                commentTextFieldRef.current.value = '';
                setIsEmptyCommentField(true);
            }
        }
        setShowIconUploadImage(true);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent newline insertion
            handleCommentSubmit();
        }
    };

    // upload image
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the list of selected file

        const reader = new FileReader();
        reader.onload = () => {
            const imageDataURL = reader.result;
            // get the name of the uploaded image
            const imageName = file.name;
            // store both the name and URL
            setImageURL({ name: imageName, url: imageDataURL });
            setShowIconUploadImage(false);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
        setIsEmptyCommentField(false);
    };

    const handleRemoveImageUploaded = () => {
        setImageURL(null);
        setShowIconUploadImage(true);
        setIsEmptyCommentField(true);
    };

    // add emoji
    const handleEmojiClick = (event) => {
        // const commentText = commentTextFieldRef.current.value + event.emoji;
        if (commentTextFieldRef.current) {
            const currentValue = commentTextFieldRef.current.value;
            const newValue = currentValue + event.emoji;
            commentTextFieldRef.current.value = newValue;
        }
        setIsEmptyCommentField(false);
        setShowPicker(false);
    };

    const concatenateString = contentArray.length >= 2 ? contentArray[1] : '';
    // console.log('concatenateString: ', concatenateString);
    const MAX_CONTENT_LENGTH = contentArray[0].concat(concatenateString).substring(0, 200);

    const handleClicksTheNumberOfComments = () => {
        setIsOpenCommentRegion(true);
        // condition to check when button comment is clicked --> It will auto focus on textfield comment
        setTimeout(() => {
            // use this because this setIsOpenCommentRegion occures before commentTextFieldRef running
            if (commentTextFieldRef.current) {
                commentTextFieldRef.current.focus();
            }
        }, 0);
    };

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentTimestamp(new Date());
    //     }, 60000); // 60 seconds

    //     return () => clearInterval(intervalId);
    // }, []);

    // console.log('check list image posted: ', imageUrl);

    return (
        <Box>
            {hideThePostSelected ? (
                <HideThePost handleShowPostAgain={handleShowThePostJustHidden} />
            ) : (
                <Box
                    sx={{
                        border: '1px solid #d3d3d3',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        minHeight: '10vh',
                        mb: 2,
                        [mobileScreen]: {
                            borderRadius: 0,
                            mb: 1,
                        },
                    }}
                >
                    <Box sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Avatar
                                src={avatarSrc && avatarSrc.imgUrl}
                                sx={{
                                    height: '48px',
                                    width: '48px',
                                    filter: avatarSrc && avatarSrc.imageStyle,
                                    transform: `rotate(${
                                        avatarSrc && avatarSrc.imageRotationAngle
                                    }deg)`,
                                }}
                                alt="User Avatar"
                            />
                            <Box sx={{ ml: 2, flexGrow: 1 }}>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {displayName}
                                </Typography>

                                <Typography sx={{ fontSize: '13px', color: 'text.secondary' }}>
                                    {followers} followers
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '13px', color: 'text.secondary' }}>
                                        {/* update and show the current of posts */}
                                        {calculateTimeElapsed(time)}
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: '5px',
                                            height: '5px',
                                            backgroundColor: 'gray',
                                            borderRadius: '50%',
                                            mx: '4px',
                                        }}
                                    />
                                    <IconButton sx={{ padding: 0 }}>
                                        {viewPostPermission ? <PublicIcon /> : <Diversity3Icon />}
                                    </IconButton>
                                </Box>
                            </Box>
                            <IconButton onClick={handleOpenPostMenuSettings}>
                                <MoreHorizIcon sx={{ fontSize: '24px' }} />
                            </IconButton>

                            <IconButton onClick={handleHideThePostSelected}>
                                <CloseIcon sx={{ fontSize: '24px' }} />
                            </IconButton>
                        </Box>

                        {/* show post content */}
                        <Box>
                            {/* hash tag */}
                            {hashtag && (
                                <Box>
                                    <Typography
                                        variant="body1"
                                        component="div" // Set component to "div" for line breaks
                                        sx={{ fontSize: '14px', color: blue[700] }}
                                    >
                                        {hashtag}
                                    </Typography>
                                </Box>
                            )}

                            {/* content of post */}
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    variant="body1"
                                    component="div" // Set component to "div" for line breaks
                                    sx={{
                                        width: '100%',
                                        fontSize: '14px',
                                        mt: 1,
                                        textAlign: 'justify',
                                    }}
                                >
                                    {expanded ? (
                                        <Box>
                                            {contentArray.map((paragraph, index) => (
                                                <Box key={index} sx={{ mb: 2 }}>
                                                    <Typography
                                                        variant="body1"
                                                        component="div"
                                                        sx={{
                                                            fontSize: '14px',
                                                            mt: 1,
                                                            textAlign: 'justify',
                                                            whiteSpace: 'pre-wrap', // maintain the space when we copy some text
                                                        }}
                                                    >
                                                        {paragraph}
                                                    </Typography>
                                                </Box>
                                            ))}
                                            <Typography
                                                component="span"
                                                onClick={toggleExpanded}
                                                sx={{
                                                    fontSize: '12.5px',
                                                    '&:hover': {
                                                        cursor: 'pointer',
                                                        textDecoration: 'underline',
                                                        fontWeight: 'bold',
                                                        color: 'blue',
                                                    },
                                                    display: 'flex',
                                                    alignItems: 'end',
                                                    justifyContent: 'flex-end',
                                                }}
                                            >
                                                See Less
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <Box>
                                            <Typography
                                                variant="body1"
                                                component="div" // Set component to "div" for line breaks
                                                sx={{
                                                    fontSize: '14px',
                                                    mt: 1,
                                                    textAlign: 'justify',
                                                    whiteSpace: 'pre-wrap',
                                                }}
                                            >
                                                {MAX_CONTENT_LENGTH}
                                                {MAX_CONTENT_LENGTH.length === 200 && (
                                                    <Typography
                                                        component="span"
                                                        onClick={toggleExpanded}
                                                        sx={{
                                                            fontSize: '12.5px',
                                                            '&:hover': {
                                                                cursor: 'pointer',
                                                                textDecoration: 'underline',
                                                                fontWeight: 'bold',
                                                                color: 'blue',
                                                            },
                                                        }}
                                                    >
                                                        ...See More
                                                    </Typography>
                                                )}
                                            </Typography>
                                        </Box>
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Doesn't have image */}
                    {imageUrl && (
                        <Box>
                            {Array.isArray(imageUrl) ? (
                                <Grid container>
                                    {imageUrl.length >= 4 ? (
                                        <React.Fragment>
                                            {/* just show 4 image from list image in post */}
                                            {imageUrl.slice(0, 4).map((image, index) => (
                                                <Grid
                                                    item
                                                    xs={6}
                                                    sm={6}
                                                    md={6}
                                                    lg={imageUrl.length >= 4 ? 6 : 12}
                                                    key={index}
                                                    sx={{
                                                        borderRight:
                                                            (imageUrl.length >= 4 && index === 0) ||
                                                            index === 2
                                                                ? '2px solid white'
                                                                : null,
                                                        borderBottom:
                                                            (imageUrl.length >= 4 && index === 0) ||
                                                            index === 1
                                                                ? '2px solid white'
                                                                : null,
                                                        position: 'relative',
                                                        // bgcolor: blue[100],
                                                        // center for image
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    {image.url.includes('video') ? (
                                                        <ShowVideoUploaded
                                                            width={400}
                                                            height={300}
                                                            srcVideo={image.url}
                                                        />
                                                    ) : (
                                                        <Avatar
                                                            src={image.url}
                                                            onClick={handleImageClick}
                                                            sx={{
                                                                height: '320px',
                                                                width: '100%',
                                                                borderRadius: '0',
                                                                objectFit: 'cover',
                                                                // m: 1,
                                                                '&:hover': {
                                                                    cursor: 'pointer',
                                                                },
                                                            }}
                                                            alt="Image Upload by User"
                                                        />
                                                    )}

                                                    {/* the last image (4th) and image uploaded has more than 4 images */}
                                                    {/* show the number of images after images 4th */}
                                                    {index === 3 && imageUrl.length > 4 && (
                                                        <Box
                                                            sx={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                width: '100%',
                                                                height: '100%',
                                                                bgcolor: 'rgba(0, 0, 0, 0.5)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: 'white',
                                                                fontSize: '24px',
                                                                fontWeight: 'bold',
                                                            }}
                                                        >
                                                            +{imageUrl.length - 4}
                                                        </Box>
                                                    )}
                                                </Grid>
                                            ))}
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            {imageUrl.length === 3 ? (
                                                <React.Fragment>
                                                    {/* get 3 image */}
                                                    {imageUrl.slice(0, 3).map((image, index) => (
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            sm={6}
                                                            md={6}
                                                            lg={
                                                                imageUrl.length === 3 && index === 2 // at index === 2 (image 3) ==> will have  lg={12}
                                                                    ? 12
                                                                    : 6
                                                            }
                                                            key={index}
                                                            sx={{
                                                                position: 'relative',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                overflow: 'hidden',
                                                                borderRight:
                                                                    index === 0 || index === 2
                                                                        ? '2px solid white'
                                                                        : null,
                                                                borderBottom:
                                                                    index === 0 || index === 1
                                                                        ? '2px solid white'
                                                                        : null,
                                                            }}
                                                        >
                                                            <Avatar
                                                                src={image.url}
                                                                onClick={() =>
                                                                    handleImageClick(index)
                                                                }
                                                                sx={{
                                                                    height: '320px',
                                                                    width: '100%',
                                                                    borderRadius: '0',
                                                                    objectFit: 'cover',
                                                                    '&:hover': {
                                                                        cursor: 'pointer',
                                                                    },
                                                                }}
                                                                alt={`Uploaded image ${index + 1}`}
                                                            />
                                                        </Grid>
                                                    ))}
                                                </React.Fragment>
                                            ) : (
                                                <React.Fragment></React.Fragment>
                                            )}
                                        </React.Fragment>
                                    )}
                                </Grid>
                            ) : (
                                <Grid item xs={12} md={12} lg={12}>
                                    <Avatar
                                        src={imageUrl}
                                        onClick={handleImageClick}
                                        sx={{
                                            height: '320px',
                                            width: '100%',
                                            borderRadius: '0',
                                            // m: 1,
                                            objectFit: 'cover',
                                            '&:hover': {
                                                cursor: 'pointer',
                                            },
                                        }}
                                        alt="Image Upload by User"
                                    />
                                </Grid>
                            )}
                        </Box>
                    )}
                    {imageUrl && imageUrl.length === 1 && (
                        <React.Fragment>
                            {imageUrl.map((image, index) => (
                                <Grid container item sm={12} xs={12} md={12} lg={12} key={index}>
                                    {image.url.includes('video') ? (
                                        <ShowVideoUploaded
                                            width={400}
                                            height={300}
                                            srcVideo={image.url}
                                        />
                                    ) : (
                                        <Avatar
                                            src={image.url}
                                            onClick={handleImageClick}
                                            sx={{
                                                height: '250px',
                                                width: '100%',
                                                borderRadius: '0',
                                                objectFit: 'cover',
                                                // m: 1,
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                },
                                            }}
                                            alt="Image Upload by User"
                                        />
                                    )}
                                </Grid>
                            ))}
                        </React.Fragment>
                    )}
                    {imageUrl && imageUrl.length === 2 && (
                        <Grid container item>
                            {imageUrl.map((image, index) => (
                                <Grid sm={12} xs={12} md={6} lg={6} key={index}>
                                    {image.url.includes('video') ? (
                                        <ShowVideoUploaded
                                            width={400}
                                            height={300}
                                            srcVideo={image.url}
                                        />
                                    ) : (
                                        <Avatar
                                            src={image.url}
                                            onClick={handleImageClick}
                                            sx={{
                                                height: '250px',
                                                width: '100%',
                                                borderRadius: '0',
                                                objectFit: 'cover',
                                                // m: 1,
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                },
                                            }}
                                            alt="Image Upload by User"
                                        />
                                    )}
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {/* region for: reaction, comment and share - show icon is selected*/}
                    <Box sx={{ p: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: '8px' }}>
                            <Box
                                sx={{
                                    mb: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexGrow: 1,
                                }}
                            >
                                {numberOfReaction || selectedReaction ? (
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {/* {selectedReaction && // render each reaction
                                        selectedReaction.btnText &&
                                        selectedReaction.btnText.includes('Liked') ? (
                                            <Avatar
                                                src={Liked}
                                                sx={{
                                                    height: '24px',
                                                    width: '24px',
                                                    borderRadius: '0',
                                                    zIndex: 2,
                                                }}
                                                alt="Liked a Post"
                                            />
                                        ) : selectedReaction &&
                                          selectedReaction.btnText &&
                                          selectedReaction.btnText.includes('Loved') ? (
                                            <Avatar
                                                src={Love}
                                                sx={{
                                                    height: '24px',
                                                    width: '24px',
                                                    borderRadius: '0',
                                                    // ml: '-8px',
                                                    zIndex: 1,
                                                }}
                                                alt="Loved a Post"
                                            />
                                        ) : (
                                            <Avatar
                                                src={Laugh}
                                                sx={{
                                                    height: '24px',
                                                    width: '24px',
                                                    borderRadius: '0',
                                                    // ml: '-8px',
                                                }}
                                                alt="Laugh a Post"
                                            />
                                        )} */}
                                        <Avatar
                                            src={Liked}
                                            sx={{
                                                height: '24px',
                                                width: '24px',
                                                borderRadius: '0',
                                                zIndex: 2,
                                            }}
                                            alt="Liked a Post"
                                        />

                                        <Avatar
                                            src={Love}
                                            sx={{
                                                height: '24px',
                                                width: '24px',
                                                borderRadius: '0',
                                                ml: '-8px',
                                                zIndex: 1,
                                            }}
                                            alt="Loved a Post"
                                        />

                                        <Avatar
                                            src={Laugh}
                                            sx={{
                                                height: '24px',
                                                width: '24px',
                                                borderRadius: '0',
                                                ml: '-8px',
                                            }}
                                            alt="Laugh a Post"
                                        />

                                        {/* update the number of reations */}
                                        <CustomTypography>
                                            {numberOfReaction + (selectedReaction ? 1 : 0)}
                                        </CustomTypography>
                                    </Box>
                                ) : (
                                    <></>
                                )}
                            </Box>
                            {/* show the number of comments */}
                            <Box onClick={handleClicksTheNumberOfComments}>
                                {numberOfComment !== 0 || getCommentListLength !== 0 ? (
                                    // show the number of comments
                                    <CustomTypography>
                                        {numberOfComment + getCommentListLength} comment
                                        {numberOfComment + getCommentListLength > 1 ? 's' : ''}
                                    </CustomTypography>
                                ) : (
                                    // doesn't show
                                    <></>
                                )}
                            </Box>
                        </Box>
                        <Divider />
                        <PostActionButton
                            openCommentRegion={handleOpenCommentRegion}
                            postID={postID}
                            onReactionClick={handleChooseReaction}
                        />
                        {isOpenCommentRegion && (
                            <Box>
                                <Box sx={{ display: 'flex', mt: 1 }}>
                                    <Avatar
                                        // src={UserAvatar}
                                        src={authenticatedInformation.userPhoto.imgUrl}
                                        alt="User Image"
                                        sx={{
                                            height: '40px',
                                            width: '40px',
                                            objectFit: 'cover',
                                            filter:
                                                authenticatedInformation.userPhoto &&
                                                authenticatedInformation.userPhoto.imageStyle,
                                            transform: `rotate(${authenticatedInformation.userPhoto.imageRotationAngle}deg)`,
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flexGrow: 1,
                                            border: '1px solid #d0d0d0',
                                            ml: 1,
                                            borderRadius: '12px',
                                            backdropFilter: '',
                                        }}
                                    >
                                        <CommentTextField
                                            inputRef={commentTextFieldRef}
                                            onChange={handleCommentTextFieldChange}
                                            disabled={false}
                                            isShowPlaceholder={true}
                                            handleKeyDown={handleKeyDown}
                                            imageURLUploaded={imageURL}
                                            removeImageUploaded={handleRemoveImageUploaded}
                                        />

                                        <CommentTextField
                                            disabled={true}
                                            isEmptyCommentField={isEmptyCommentField}
                                            submitFunction={handleCommentSubmit}
                                            uploadedImage={handleImageUpload}
                                            showIconUploadImage={showIconUploadImage}
                                            removeImageUploaded={handleRemoveImageUploaded}
                                            setShowPicker={setShowPicker}
                                            showPicker={showPicker}
                                            handleEmojiClick={handleEmojiClick}
                                        />
                                    </Box>
                                </Box>

                                {/*  filter comment with 2 options: see all, recent comments */}
                                <Button
                                    sx={{
                                        padding: 0,
                                        py: 1,
                                        my: 1,
                                        textTransform: 'capitalize',
                                        fontSize: '14px',
                                        color: '#65676b',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            bgcolor: 'transparent',
                                        },
                                    }}
                                    endIcon={<ExpandMoreIcon />}
                                    onClick={handleImageClick}
                                >
                                    View more comments
                                </Button>
                                {/* <FilterComments
                                    postID={postID}
                                    imageUrl={imageUrl}
                                    handleCloseModal={handleCloseModal}
                                    handleChooseReaction={handleChooseReaction}
                                    avatarSrc={avatarSrc}
                                    displayName={displayName}
                                    followers={followers}
                                    time={time}
                                    hashtag={hashtag}
                                    content={content}
                                    numberOfReaction={numberOfReaction}
                                    numberOfComment={numberOfComment}
                                /> */}
                                <CommentsData postId={postID} imageUrl={imageUrl} />
                            </Box>
                        )}
                    </Box>
                    {/* Comment Modal */}
                    <Modal open={openModal} onClose={handleCloseModal}>
                        <CommentModal
                            postId={postID}
                            imageUrl={imageUrl}
                            handleClose={handleCloseModal}
                            onReactionClick={handleChooseReaction}
                            userAvatar={avatarSrc}
                            userName={displayName}
                            follower={followers}
                            time={time}
                            postHashtag={hashtag}
                            postContent={content}
                            numberReactions={numberOfReaction}
                            numberComments={numberOfComment}
                        />
                    </Modal>
                    <PostMenuSettings
                        openMenuStatus={menuStatus}
                        handleClosePostMenuSettings={handleClosePostMenuSettings}
                        postMenuSettingsList={postMenuSettings}
                    />
                </Box>
            )}
        </Box>
    );
}

export default Post;
