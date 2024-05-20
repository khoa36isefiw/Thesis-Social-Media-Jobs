import React from 'react';
import { Box, Avatar, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import MissYou from '../../assets/images/missu.jpeg';
import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import { useSelector } from 'react-redux';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return strTime;
};

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const getTimeDisplay = (messageDate) => {
    const now = new Date();
    const timeDifference = now - messageDate;

    // Check if the message was sent within the last 24 hours
    const isRecent = timeDifference < 24 * 60 * 60 * 1000;
    return isRecent ? formatTime(messageDate) : formatDate(messageDate);
};

const countAttachments = (message) => {
    let count = 0;
    if (message[1] && message[1].length > 0) count += message[1].length; // Count images
    if (message[2] && message[2].length > 0) count += message[2].length; // Count files
    return count;
};

// function ChatWithUser({ onClick }) {
//     // get value of check star for a person?
//     // if it's true (isStarred: is true) ==> show icon
//     const isStarred = useSelector((state) => state.importantPerson.isHighlight);
//     // show message just send on quick screen
//     // chưa show message bị delet4ed
//     const latestMessage2 = useSelector((state) => state.messages);
//     const messageExists = Array.isArray(latestMessage2);

//     const messageTime =
//         latestMessage2 && latestMessage2[3]
//             ? getTimeDisplay(new Date(latestMessage2[3]))
//             : '11:09 AM';

//     const attachmentCount = latestMessage2 ? countAttachments(latestMessage2) : 0;

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderLeft: '4px solid #02754f',
//                 width: '100%',
//                 height: '90px',
//                 backgroundColor: '#edf3f7',
//                 p: 1,
//                 mb: 1,
//                 borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
//             }}
//             onClick={onClick}
//         >
//             <Box
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     [mobileScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                     [tabletScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                 }}
//             >
//                 <Box
//                     sx={{
//                         height: '64px',
//                         width: '64px',
//                         position: 'relative',
//                     }}
//                 >
//                     <Avatar
//                         src={MissYou}
//                         alt={'User Avatar'}
//                         sx={{
//                             height: '64px',
//                             width: '64px',
//                             border: `1px solid ${theme.palette.primaryText}`,
//                         }}
//                     />
//                     {/* This circle represents people who are online*/}
//                     <Box
//                         sx={{
//                             position: 'absolute',
//                             bottom: 0,
//                             right: 0,
//                             height: '15px',
//                             width: '15px',
//                             borderRadius: '50%',
//                             border: '2px solid #fff',
//                             bgcolor: 'green',
//                         }}
//                     />
//                 </Box>
//                 <Box
//                     sx={{
//                         mt: 1,
//                         ml: 1,
//                         [mobileScreen]: {
//                             flexGrow: 1,
//                         },
//                         [tabletScreen]: {
//                             flexGrow: 1,
//                         },
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         <CustomizeTypography fs="14px">Melody Fall Topic</CustomizeTypography>

//                         {/* the time of the last message was sent */}
//                         <CustomizeTypography
//                             sx={{
//                                 fontSize: '14px',
//                                 ml: 2,
//                                 color: theme.palette.primaryText,
//                                 [mobileScreen]: {
//                                     ml: 0,
//                                 },
//                             }}
//                         >
//                             {/* 8:33 AM */}
//                             {/* time sent message or do some actions */}
//                             {messageTime}
//                         </CustomizeTypography>
//                     </Box>
//                     {/* quick view of the last message */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         {latestMessage2 ? (
//                             <Box>
//                                 {latestMessage2[0] !== null && (
//                                     <CustomizeTypography
//                                         sx={{
//                                             width: '165px',
//                                             overflow: 'hidden',
//                                             whiteSpace: 'nowrap',
//                                             textOverflow: 'ellipsis',
//                                             color: theme.palette.primaryText,
//                                             fontSize: '14px',
//                                         }}
//                                     >
//                                         You: {latestMessage2[0]}
//                                     </CustomizeTypography>
//                                 )}
//                                 {attachmentCount > 0 && (
//                                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                         <IconButton sx={{ padding: 0 }}>
//                                             <AttachFileIcon
//                                                 sx={{
//                                                     transform: 'rotate(45deg)',
//                                                 }}
//                                             />
//                                         </IconButton>
//                                         <CustomizeTypography
//                                             sx={{
//                                                 color: theme.palette.primaryText,
//                                                 fontSize: '14px',
//                                                 ml: '4px',
//                                             }}
//                                         >
//                                             You sent {attachmentCount > 1 ? attachmentCount : 'an'}{' '}
//                                             attachment{attachmentCount > 1 ? 's' : ''}
//                                         </CustomizeTypography>
//                                     </Box>
//                                 )}
//                             </Box>
//                         ) : (
//                             <CustomizeTypography
//                                 sx={{
//                                     color: theme.palette.primaryText,
//                                     fontSize: '14px',
//                                 }}
//                             >
//                                 No message was sent
//                             </CustomizeTypography>
//                         )}

//                         {isStarred && (
//                             <IconButton>
//                                 <StarIcon
//                                     sx={{
//                                         fontSize: '20px',
//                                         color: '#c37d17',
//                                         mt: 2,
//                                     }}
//                                 />
//                             </IconButton>
//                         )}
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default ChatWithUser;

// version 2
// import React from 'react';
// import { Box, Avatar, IconButton } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
// import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
// import MissYou from '../../assets/images/missu.jpeg';
// import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
// import { useSelector } from 'react-redux';
// import AttachFileIcon from '@mui/icons-material/AttachFile';

// const formatTime = (date) => {
//     let hours = date.getHours();
//     const minutes = date.getMinutes();
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     const strTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
//     return strTime;
// };

// const formatDate = (date) => {
//     const day = date.getDate();
//     const month = date.getMonth() + 1; // Months are zero indexed
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
// };

// const getTimeDisplay = (date) => {
//     const now = new Date();
//     const timeDifference = now - date;

//     // Check if the message was sent within the last 24 hours
//     const isRecent = timeDifference < 24 * 60 * 60 * 1000;
//     return isRecent ? formatTime(date) : formatDate(date);
// };

// const countAttachments = (message) => {
//     let count = 0;
//     if (message[1].length > 0) count += message[1].length; // Count images
//     if (message[2].length > 0) count += message[2].length; // Count files

//     return count;
// };

// function ChatWithUser({ onClick }) {
//     // Get value of check star for a person
//     const isStarred = useSelector((state) => state.importantPerson.isHighlight);

//     // Show message just sent
//     const latestMessage2 = useSelector((state) => state.messages);
//     const messageExists = Array.isArray(latestMessage2) && latestMessage2.length > 0;
//     const latestMessage = messageExists ? latestMessage2[latestMessage2.length - 1] : null;
//     const attachmentCount = latestMessage ? countAttachments(latestMessage) : 0;

//     // Get time sent message
//     const messageTime = latestMessage ? getTimeDisplay(new Date(latestMessage[3])) : '11:09 AM';

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderLeft: '4px solid #02754f',
//                 width: '100%',
//                 height: '90px',
//                 backgroundColor: '#edf3f7',
//                 p: 1,
//                 mb: 1,
//                 borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
//             }}
//             onClick={onClick}
//         >
//             <Box
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     [mobileScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                     [tabletScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                 }}
//             >
//                 <Box
//                     sx={{
//                         height: '64px',
//                         width: '64px',
//                         position: 'relative',
//                     }}
//                 >
//                     <Avatar
//                         src={MissYou}
//                         alt={'User Avatar'}
//                         sx={{
//                             height: '64px',
//                             width: '64px',
//                             border: `1px solid ${theme.palette.primaryText}`,
//                         }}
//                     />
//                     {/* This circle represents people who are online */}
//                     <Box
//                         sx={{
//                             position: 'absolute',
//                             bottom: 0,
//                             right: 0,
//                             height: '15px',
//                             width: '15px',
//                             borderRadius: '50%',
//                             border: '2px solid #fff',
//                             bgcolor: 'green',
//                         }}
//                     />
//                 </Box>
//                 <Box
//                     sx={{
//                         mt: 1,
//                         ml: 1,
//                         [mobileScreen]: {
//                             flexGrow: 1,
//                         },
//                         [tabletScreen]: {
//                             flexGrow: 1,
//                         },
//                     }}
//                 >
//                     {/* Chat with */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         <CustomizeTypography fs="14px">Melody Fall Topic</CustomizeTypography>

//                         {/* The time of the last message was sent */}
//                         <CustomizeTypography
//                             sx={{
//                                 fontSize: '14px',
//                                 ml: 2,
//                                 [mobileScreen]: {
//                                     ml: 0,
//                                 },
//                             }}
//                         >
//                             {messageTime}
//                         </CustomizeTypography>
//                     </Box>

//                     {/* Quick view of the last message */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         {latestMessage ? (
//                             <Box>
//                                 {latestMessage[0] === null ? (
//                                     <CustomizeTypography
//                                         sx={{
//                                             color: theme.palette.primaryText,
//                                             fontSize: '14px',
//                                             fontStyle: 'italic',
//                                         }}
//                                     >
//                                         This message has been deleted
//                                     </CustomizeTypography>
//                                 ) : (
//                                     <CustomizeTypography
//                                         sx={{
//                                             color: theme.palette.primaryText,
//                                             fontSize: '14px',
//                                             display: '-webkit-box',
//                                             WebkitBoxOrient: 'vertical',
//                                             WebkitLineClamp: 2,
//                                             overflow: 'hidden',
//                                             textOverflow: 'ellipsis',
//                                         }}
//                                     >
//                                         You: {latestMessage[0]}
//                                     </CustomizeTypography>
//                                 )}
//                                 {attachmentCount !== 0 ? (
//                                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                         <IconButton sx={{ padding: 0 }}>
//                                             <AttachFileIcon
//                                                 sx={{
//                                                     transform: 'rotate(45deg)',
//                                                 }}
//                                             />
//                                         </IconButton>
//                                         <CustomizeTypography
//                                             sx={{
//                                                 color: theme.palette.primaryText,
//                                                 fontSize: '14px',
//                                                 ml: '4px',
//                                             }}
//                                         >
//                                             You sent {attachmentCount > 1 ? attachmentCount : 'an'}{' '}
//                                             attachment
//                                             {attachmentCount > 1 ? 's' : ''}
//                                         </CustomizeTypography>
//                                     </Box>
//                                 ) : (
//                                     <CustomizeTypography
//                                         sx={{
//                                             color: theme.palette.primaryText,
//                                             fontSize: '14px',
//                                             fontStyle: 'italic',
//                                         }}
//                                     >
//                                         This message has been deleted
//                                     </CustomizeTypography>
//                                 )}
//                             </Box>
//                         ) : (
//                             <CustomizeTypography
//                                 sx={{
//                                     color: theme.palette.primaryText,
//                                     fontSize: '13.5px',
//                                 }}
//                             >
//                                 No message was sent!
//                             </CustomizeTypography>
//                         )}

//                         {isStarred && (
//                             <IconButton>
//                                 <StarIcon
//                                     sx={{
//                                         fontSize: '20px',
//                                         color: '#c37d17',
//                                         mt: 2,
//                                     }}
//                                 />
//                             </IconButton>
//                         )}
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default ChatWithUser;

// v2
// import React from 'react';
// import { Box, Avatar, IconButton } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import { useSelector } from 'react-redux';
// import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
// import MissYou from '../../assets/images/missu.jpeg';
// import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';

// // Helper functions for formatting time and date
// const formatTime = (date) => {
//     let hours = date.getHours();
//     const minutes = date.getMinutes();
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     const strTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
//     return strTime;
// };

// const formatDate = (date) => {
//     const day = date.getDate();
//     const month = date.getMonth() + 1; // Months are zero indexed
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
// };

// const getTimeDisplay = (date) => {
//     const now = new Date();
//     const timeDifference = now - date;
//     const isRecent = timeDifference < 24 * 60 * 60 * 1000; // Check if the message was sent within the last 24 hours
//     return isRecent ? formatTime(date) : formatDate(date);
// };

// // Count the total number of attachments in a message
// const countAttachments = (message) => {
//     let count = 0;
//     if (message[1].length > 0) count += message[1].length; // Count images
//     if (message[2].length > 0) count += message[2].length; // Count files
//     return count;
// };

// function ChatWithUser({ onClick }) {
//     // Get value of check star for a person
//     const isStarred = useSelector((state) => state.importantPerson.isHighlight);

//     // Show message just sent
//     const latestMessage2 = useSelector((state) => state.messages);
//     const messageExists = Array.isArray(latestMessage2) && latestMessage2.length > 0;
//     const latestMessage = messageExists ? latestMessage2[latestMessage2.length - 1] : null;
//     const attachmentCount = latestMessage ? countAttachments(latestMessage) : 0;

//     // Get time sent message
//     const messageTime = latestMessage ? getTimeDisplay(new Date(latestMessage[3])) : '11:09 AM';
//     console.log('Lastest message: ', latestMessage);
//     const isDeleted = latestMessage && latestMessage.length < 0;
//     console.log('Test last message: ', isDeleted);

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderLeft: '4px solid #02754f',
//                 width: '100%',
//                 height: '90px',
//                 backgroundColor: '#edf3f7',
//                 p: 1,
//                 mb: 1,
//                 borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
//             }}
//             onClick={onClick}
//         >
//             <Box
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     [mobileScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                     [tabletScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                 }}
//             >
//                 <Box
//                     sx={{
//                         height: '64px',
//                         width: '64px',
//                         position: 'relative',
//                     }}
//                 >
//                     <Avatar
//                         src={MissYou}
//                         alt={'User Avatar'}
//                         sx={{
//                             height: '64px',
//                             width: '64px',
//                             border: `1px solid ${theme.palette.primaryText}`,
//                         }}
//                     />
//                     {/* This circle represents people who are online */}
//                     <Box
//                         sx={{
//                             position: 'absolute',
//                             bottom: 0,
//                             right: 0,
//                             height: '15px',
//                             width: '15px',
//                             borderRadius: '50%',
//                             border: '2px solid #fff',
//                             bgcolor: 'green',
//                         }}
//                     />
//                 </Box>
//                 <Box
//                     sx={{
//                         mt: 1,
//                         ml: 1,
//                         [mobileScreen]: {
//                             flexGrow: 1,
//                         },
//                         [tabletScreen]: {
//                             flexGrow: 1,
//                         },
//                     }}
//                 >
//                     {/* Chat with */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         <CustomizeTypography fs="14px">Melody Fall Topic</CustomizeTypography>

//                         {/* The time of the last message was sent */}
//                         <CustomizeTypography
//                             sx={{
//                                 fontSize: '14px',
//                                 ml: 2,
//                                 [mobileScreen]: {
//                                     ml: 0,
//                                 },
//                             }}
//                         >
//                             {messageTime}
//                         </CustomizeTypography>
//                     </Box>

//                     {/* Quick view of the last message */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         {latestMessage ? (
//                             <Box>
//                                 {isDeleted ? (
//                                     <CustomizeTypography
//                                         sx={{
//                                             color: theme.palette.primaryText,
//                                             fontSize: '14px',
//                                             fontStyle: 'italic',
//                                         }}
//                                     >
//                                         This message has been deleted
//                                     </CustomizeTypography>
//                                 ) : (
//                                     <>
//                                         {latestMessage[0] && (
//                                             <CustomizeTypography
//                                                 sx={{
//                                                     color: theme.palette.primaryText,
//                                                     fontSize: '14px',
//                                                     display: '-webkit-box',
//                                                     WebkitBoxOrient: 'vertical',
//                                                     WebkitLineClamp: 2,
//                                                     overflow: 'hidden',
//                                                     textOverflow: 'ellipsis',
//                                                 }}
//                                             >
//                                                 You: {latestMessage[0]}
//                                             </CustomizeTypography>
//                                         )}
//                                         {attachmentCount > 0 && (
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <IconButton sx={{ padding: 0 }}>
//                                                     <AttachFileIcon
//                                                         sx={{
//                                                             transform: 'rotate(45deg)',
//                                                         }}
//                                                     />
//                                                 </IconButton>
//                                                 <CustomizeTypography
//                                                     sx={{
//                                                         color: theme.palette.primaryText,
//                                                         fontSize: '14px',
//                                                         ml: '4px',
//                                                     }}
//                                                 >
//                                                     You sent{' '}
//                                                     {attachmentCount > 1 ? attachmentCount : 'an'}{' '}
//                                                     attachment
//                                                     {attachmentCount > 1 ? 's' : ''}
//                                                 </CustomizeTypography>
//                                             </Box>
//                                         )}
//                                     </>
//                                 )}
//                             </Box>
//                         ) : (
//                             <CustomizeTypography
//                                 sx={{
//                                     color: theme.palette.primaryText,
//                                     fontSize: '13.5px',
//                                 }}
//                             >
//                                 No message was sent!
//                             </CustomizeTypography>
//                         )}

//                         {isStarred && (
//                             <IconButton>
//                                 <StarIcon
//                                     sx={{
//                                         fontSize: '20px',
//                                         color: '#c37d17',
//                                         mt: 2,
//                                     }}
//                                 />
//                             </IconButton>
//                         )}
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default ChatWithUser;

// v3
// function ChatWithUser({ onClick }) {
//     // Get value of check star for a person
//     const isStarred = useSelector((state) => state.importantPerson.isHighlight);

//     // Show message just sent
//     const latestMessage2 = useSelector((state) => state.messages);
//     const latestMessage =
//         latestMessage2 && latestMessage2.length > 0
//             ? latestMessage2[latestMessage2.length - 1]
//             : null;
//     const attachmentCount = latestMessage ? countAttachments(latestMessage) : 0;

//     // Get time sent message
//     const messageTime = latestMessage ? getTimeDisplay(new Date(latestMessage[3])) : '11:09 AM';

//     const isDeleted =
//         latestMessage && latestMessage2[latestMessage2.length - 1].map((element, index) => {});
//     console.log('Chekc is deleted: ', isDeleted);
//     console.log('List of Lastest Message: ', latestMessage2);
//     console.log('Lastest Message: ', latestMessage2[latestMessage2.length - 1]);
//     // (latestMessage[0] === null ||
//     //     latestMessage[1].length === 0 ||
//     //     latestMessage[2].length === 0);

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderLeft: '4px solid #02754f',
//                 width: '100%',
//                 height: '90px',
//                 backgroundColor: '#edf3f7',
//                 p: 1,
//                 mb: 1,
//                 borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
//             }}
//             onClick={onClick}
//         >
//             <Box
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     [mobileScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                     [tabletScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                 }}
//             >
//                 <Box
//                     sx={{
//                         height: '64px',
//                         width: '64px',
//                         position: 'relative',
//                     }}
//                 >
//                     <Avatar
//                         src={MissYou}
//                         alt={'User Avatar'}
//                         sx={{
//                             height: '64px',
//                             width: '64px',
//                             border: `1px solid ${theme.palette.primaryText}`,
//                         }}
//                     />
//                     {/* This circle represents people who are online */}
//                     <Box
//                         sx={{
//                             position: 'absolute',
//                             bottom: 0,
//                             right: 0,
//                             height: '15px',
//                             width: '15px',
//                             borderRadius: '50%',
//                             border: '2px solid #fff',
//                             bgcolor: 'green',
//                         }}
//                     />
//                 </Box>
//                 <Box
//                     sx={{
//                         mt: 1,
//                         ml: 1,
//                         [mobileScreen]: {
//                             flexGrow: 1,
//                         },
//                         [tabletScreen]: {
//                             flexGrow: 1,
//                         },
//                     }}
//                 >
//                     {/* Chat with */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         <CustomizeTypography fs="14px">Melody Fall Topic</CustomizeTypography>

//                         {/* The time of the last message was sent */}
//                         <CustomizeTypography
//                             sx={{
//                                 fontSize: '14px',
//                                 ml: 2,
//                                 [mobileScreen]: {
//                                     ml: 0,
//                                 },
//                             }}
//                         >
//                             {messageTime}
//                         </CustomizeTypography>
//                     </Box>

//                     {/* Quick view of the last message */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         {latestMessage ? (
//                             <Box>
//                                 {isDeleted ? (
//                                     <CustomizeTypography
//                                         sx={{
//                                             color: theme.palette.primaryText,
//                                             fontSize: '14px',
//                                             fontStyle: 'italic',
//                                         }}
//                                     >
//                                         This message has been deleted
//                                     </CustomizeTypography>
//                                 ) : (
//                                     <>
//                                         {latestMessage[0] && (
//                                             <CustomizeTypography
//                                                 sx={{
//                                                     color: theme.palette.primaryText,
//                                                     fontSize: '14px',
//                                                     display: '-webkit-box',
//                                                     WebkitBoxOrient: 'vertical',
//                                                     WebkitLineClamp: 2,
//                                                     overflow: 'hidden',
//                                                     textOverflow: 'ellipsis',
//                                                 }}
//                                             >
//                                                 You: {latestMessage[0]}
//                                             </CustomizeTypography>
//                                         )}
//                                         {attachmentCount > 0 && (
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <IconButton sx={{ padding: 0 }}>
//                                                     <AttachFileIcon
//                                                         sx={{
//                                                             transform: 'rotate(45deg)',
//                                                         }}
//                                                     />
//                                                 </IconButton>
//                                                 <CustomizeTypography
//                                                     sx={{
//                                                         color: theme.palette.primaryText,
//                                                         fontSize: '14px',
//                                                         ml: '4px',
//                                                     }}
//                                                 >
//                                                     You sent{' '}
//                                                     {attachmentCount > 1 ? attachmentCount : 'an'}{' '}
//                                                     attachment
//                                                     {attachmentCount > 1 ? 's' : ''}
//                                                 </CustomizeTypography>
//                                             </Box>
//                                         )}
//                                     </>
//                                 )}
//                             </Box>
//                         ) : (
//                             <CustomizeTypography
//                                 sx={{
//                                     color: theme.palette.primaryText,
//                                     fontSize: '13.5px',
//                                 }}
//                             >
//                                 No message was sent!
//                             </CustomizeTypography>
//                         )}

//                         {isStarred && (
//                             <IconButton>
//                                 <StarIcon
//                                     sx={{
//                                         fontSize: '20px',
//                                         color: '#c37d17',
//                                         mt: 2,
//                                     }}
//                                 />
//                             </IconButton>
//                         )}
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default ChatWithUser;

// v4
// function ChatWithUser({ onClick }) {
//     const isStarred = useSelector((state) => state.importantPerson.isHighlight);
//     const messages = useSelector((state) => state.messages.messages);
//     const latestMessage = messages[messages.length - 1];
//     const isLastestMessageDeleted = useSelector((state) => state.messages.latestMessageDeleted);
//     const attachmentCount = latestMessage ? countAttachments(latestMessage) : 0;
//     const messageTime = latestMessage ? getTimeDisplay(new Date(latestMessage[3])) : '11:09 AM';

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderLeft: '4px solid #02754f',
//                 width: '100%',
//                 height: '90px',
//                 backgroundColor: '#edf3f7',
//                 p: 1,
//                 mb: 1,
//                 borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
//             }}
//             onClick={onClick}
//         >
//             <Box
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     [mobileScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                     [tabletScreen]: {
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     },
//                 }}
//             >
//                 <Box
//                     sx={{
//                         height: '64px',
//                         width: '64px',
//                         position: 'relative',
//                     }}
//                 >
//                     <Avatar
//                         src={MissYou}
//                         alt={'User Avatar'}
//                         sx={{
//                             height: '64px',
//                             width: '64px',
//                             border: `1px solid ${theme.palette.primaryText}`,
//                         }}
//                     />
//                     {/* This circle represents people who are online */}
//                     <Box
//                         sx={{
//                             position: 'absolute',
//                             bottom: 0,
//                             right: 0,
//                             height: '15px',
//                             width: '15px',
//                             borderRadius: '50%',
//                             border: '2px solid #fff',
//                             bgcolor: 'green',
//                         }}
//                     />
//                 </Box>
//                 <Box
//                     sx={{
//                         mt: 1,
//                         ml: 1,
//                         [mobileScreen]: {
//                             flexGrow: 1,
//                         },
//                         [tabletScreen]: {
//                             flexGrow: 1,
//                         },
//                     }}
//                 >
//                     {/* Chat with */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         <CustomizeTypography fs="14px">Melody Fall Topic</CustomizeTypography>

//                         {/* The time of the last message was sent */}
//                         <CustomizeTypography
//                             sx={{
//                                 fontSize: '14px',
//                                 ml: 2,
//                                 [mobileScreen]: {
//                                     ml: 0,
//                                 },
//                             }}
//                         >
//                             {messageTime}
//                         </CustomizeTypography>
//                     </Box>

//                     {/* Quick view of the last message */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         {latestMessage ? (
//                             <Box>
//                                 {isLastestMessageDeleted ? (
//                                     <CustomizeTypography
//                                         sx={{
//                                             color: theme.palette.primaryText,
//                                             fontSize: '14px',
//                                             fontStyle: 'italic',
//                                         }}
//                                     >
//                                         This message has been deleted
//                                     </CustomizeTypography>
//                                 ) : (
//                                     <>
//                                         {attachmentCount > 0 ? (
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <IconButton sx={{ padding: 0 }}>
//                                                     <AttachFileIcon
//                                                         sx={{
//                                                             transform: 'rotate(45deg)',
//                                                         }}
//                                                     />
//                                                 </IconButton>
//                                                 <CustomizeTypography
//                                                     sx={{
//                                                         color: theme.palette.primaryText,
//                                                         fontSize: '14px',
//                                                         ml: '4px',
//                                                     }}
//                                                 >
//                                                     You sent{' '}
//                                                     {attachmentCount > 1 ? attachmentCount : 'an'}{' '}
//                                                     attachment
//                                                     {attachmentCount > 1 ? 's' : ''}
//                                                 </CustomizeTypography>
//                                             </Box>
//                                         ) : (
//                                             latestMessage[0] !== null && (
//                                                 <CustomizeTypography
//                                                     sx={{
//                                                         color: theme.palette.primaryText,
//                                                         fontSize: '14px',
//                                                         display: '-webkit-box',
//                                                         WebkitBoxOrient: 'vertical',
//                                                         WebkitLineClamp: 2,
//                                                         overflow: 'hidden',
//                                                         textOverflow: 'ellipsis',
//                                                     }}
//                                                 >
//                                                     You: {latestMessage[0]}
//                                                 </CustomizeTypography>
//                                             )
//                                         )}
//                                     </>
//                                 )}
//                             </Box>
//                         ) : (
//                             <CustomizeTypography
//                                 sx={{
//                                     color: theme.palette.primaryText,
//                                     fontSize: '13.5px',
//                                 }}
//                             >
//                                 No message was sent!
//                             </CustomizeTypography>
//                         )}

//                         {isStarred && (
//                             <IconButton>
//                                 <StarIcon
//                                     sx={{
//                                         fontSize: '20px',
//                                         color: '#c37d17',
//                                         mt: 2,
//                                     }}
//                                 />
//                             </IconButton>
//                         )}
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default ChatWithUser;

function ChatWithUser({ onClick }) {
    const isStarred = useSelector((state) => state.importantPerson.isHighlight);
    

    // src cũ
    const messages = useSelector((state) => state.messages.messages);
    const isLatestMessageDeleted = useSelector((state) => state.messages.latestMessageDeleted);

    const latestMessage = messages.length ? messages[messages.length - 1] : null;

    const attachmentCount = latestMessage ? countAttachments(latestMessage) : 0;
    const messageTime = latestMessage ? getTimeDisplay(new Date(latestMessage[3])) : '11:09 AM';

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderLeft: '4px solid #02754f',
                width: '100%',
                height: '90px',
                backgroundColor: '#edf3f7',
                p: 1,
                mb: 1,
                borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
            }}
            onClick={onClick}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    [mobileScreen]: {
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    },
                    [tabletScreen]: {
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    },
                }}
            >
                <Box
                    sx={{
                        height: '64px',
                        width: '64px',
                        position: 'relative',
                    }}
                >
                    <Avatar
                        src={MissYou}
                        alt={'User Avatar'}
                        sx={{
                            height: '64px',
                            width: '64px',
                            border: `1px solid ${theme.palette.primaryText}`,
                        }}
                    />
                    {/* This circle represents people who are online */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            height: '15px',
                            width: '15px',
                            borderRadius: '50%',
                            border: '2px solid #fff',
                            bgcolor: 'green',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        ml: 1,
                        [mobileScreen]: {
                            flexGrow: 1,
                        },
                        [tabletScreen]: {
                            flexGrow: 1,
                        },
                    }}
                >
                    {/* Chat with */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <CustomizeTypography fs="14px">Melody Fall Topic</CustomizeTypography>

                        {/* The time of the last message was sent */}
                        <CustomizeTypography
                            sx={{
                                fontSize: '14px',
                                ml: 2,
                                [mobileScreen]: {
                                    ml: 0,
                                },
                            }}
                        >
                            {messageTime}
                        </CustomizeTypography>
                    </Box>

                    {/* Quick view of the last message */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        {latestMessage ? (
                            <Box>
                                {isLatestMessageDeleted  ? (
                                    <CustomizeTypography
                                        sx={{
                                            color: theme.palette.primaryText,
                                            fontSize: '14px',
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        This message has been deleted
                                    </CustomizeTypography>
                                ) : (
                                    <>
                                        {attachmentCount > 0 ? (
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <IconButton sx={{ padding: 0 }}>
                                                    <AttachFileIcon
                                                        sx={{
                                                            transform: 'rotate(45deg)',
                                                        }}
                                                    />
                                                </IconButton>
                                                <CustomizeTypography
                                                    sx={{
                                                        color: theme.palette.primaryText,
                                                        fontSize: '14px',
                                                        ml: '4px',
                                                    }}
                                                >
                                                    You sent{' '}
                                                    {attachmentCount > 1 ? attachmentCount : 'an'}{' '}
                                                    attachment
                                                    {attachmentCount > 1 ? 's' : ''}
                                                </CustomizeTypography>
                                            </Box>
                                        ) : (
                                            latestMessage[0] !== null && (
                                                <CustomizeTypography
                                                    sx={{
                                                        color: theme.palette.primaryText,
                                                        fontSize: '14px',
                                                        display: '-webkit-box',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: 2,
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                    }}
                                                >
                                                    You: {latestMessage[0]}
                                                </CustomizeTypography>
                                            )
                                        )}
                                    </>
                                )}
                            </Box>
                        ) : (
                            <CustomizeTypography
                                sx={{
                                    color: theme.palette.primaryText,
                                    fontSize: '13.5px',
                                }}
                            >
                                No message was sent!
                            </CustomizeTypography>
                        )}
                        

                        {isStarred && (
                            <IconButton>
                                <StarIcon
                                    sx={{
                                        fontSize: '20px',
                                        color: '#c37d17',
                                        mt: 2,
                                    }}
                                />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ChatWithUser;
