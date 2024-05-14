import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ReactionOnMessage from './ReactionOnMessage'; // Import your ReactionOnMessage component here
import Liked from '../../assets/images/like_reactions.png';
import Love from '../../assets/images/heart_reactions.png';
import Laugh from '../../assets/images/laughing_reactions.png';
import Reply from '../../assets/images/left_reactions.png';
import { theme } from '../Theme/Theme';

// version 1
// const MessageDetails2 = ({ dataMessage, imageUploaded, fileUploaded }) => {
//     const [hoveredTextIndex, setHoveredTextIndex] = useState(null);
//     const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
//     const [selectedTextReactions, setSelectedTextReactions] = useState({});
//     const [selectedImageReactions, setSelectedImageReactions] = useState({});

//     const handleTextMouseEnter = (messageIndex) => {
//         setHoveredTextIndex(messageIndex);
//     };

//     const handleTextMouseLeave = () => {
//         setHoveredTextIndex(null);
//     };

//     const handleImageMouseEnter = (messageIndex, imageIndex) => {
//         setHoveredImageIndex({ messageIndex, imageIndex });
//     };

//     const handleImageMouseLeave = () => {
//         setHoveredImageIndex(null);
//     };

//     const handleTextReactionSelection = (reaction, messageIndex) => {
//         setSelectedTextReactions({ ...selectedTextReactions, [messageIndex]: reaction });
//     };

//     const handleImageReactionSelection = (reaction, messageIndex, imageIndex) => {
//         const imageKey = `${messageIndex}_${imageIndex}`;
//         setSelectedImageReactions({ ...selectedImageReactions, [imageKey]: reaction });
//     };

//     return (
//         <Box sx={{ overflowY: 'auto', maxHeight: '300px' }}>
//             {dataMessage.map((message, messageIndex) => {
//                 const text = message[0];
//                 const images = message[1];
//                 const files = message[2];

//                 return (
//                     <Box
//                         key={messageIndex}
//                         sx={{ position: 'relative', my: 1 }}
//                         onMouseEnter={() => handleTextMouseEnter(messageIndex)}
//                         onMouseLeave={handleTextMouseLeave}
//                     >
//                         <Typography>{text}</Typography>

//                         {hoveredTextIndex === messageIndex && (
//                             <ReactionOnMessage
//                                 handCloseReactions={() => setHoveredTextIndex(null)}
//                                 onReactionSelect={(reaction) =>
//                                     handleTextReactionSelection(reaction, messageIndex)
//                                 }
//                                 listDataReactions={[
//                                     { reactionsImage: Liked, reactionsName: 'Liked a Message' },
//                                     { reactionsImage: Love, reactionsName: 'Loved a Message' },
//                                     {
//                                         reactionsImage: Laugh,
//                                         reactionsName: 'Laughed at a Message',
//                                     },
//                                     {
//                                         reactionsImage: Reply,
//                                         reactionsName: 'Replied to a Message',
//                                     },
//                                 ]}
//                             />
//                         )}
//                         {selectedTextReactions[messageIndex] && (
//                             <img
//                                 src={selectedTextReactions[messageIndex].reactionsImage}
//                                 alt={selectedTextReactions[messageIndex].reactionsName}
//                             />
//                         )}

//                         {images.map((image, imgIndex) => {
//                             const imageKey = `${messageIndex}_${imgIndex}`;
//                             return (
//                                 <div
//                                     key={imgIndex}
//                                     onMouseEnter={() =>
//                                         handleImageMouseEnter(messageIndex, imgIndex)
//                                     }
//                                     onMouseLeave={handleImageMouseLeave}
//                                 >
//                                     <img src={image.url} alt={image.name} />
//                                     {hoveredImageIndex &&
//                                         hoveredImageIndex.messageIndex === messageIndex &&
//                                         hoveredImageIndex.imageIndex === imgIndex && (
//                                             <ReactionOnMessage
//                                                 handCloseReactions={() =>
//                                                     setHoveredImageIndex(null)
//                                                 }
//                                                 onReactionSelect={(reaction) =>
//                                                     handleImageReactionSelection(
//                                                         reaction,
//                                                         messageIndex,
//                                                         imgIndex,
//                                                     )
//                                                 }
//                                                 listDataReactions={[
//                                                     {
//                                                         reactionsImage: Liked,
//                                                         reactionsName: 'Liked a Message',
//                                                     },
//                                                     {
//                                                         reactionsImage: Love,
//                                                         reactionsName: 'Loved a Message',
//                                                     },
//                                                     {
//                                                         reactionsImage: Laugh,
//                                                         reactionsName: 'Laughed at a Message',
//                                                     },
//                                                     {
//                                                         reactionsImage: Reply,
//                                                         reactionsName: 'Replied to a Message',
//                                                     },
//                                                 ]}
//                                             />
//                                         )}
//                                     {selectedImageReactions[imageKey] && (
//                                         <img
//                                             src={selectedImageReactions[imageKey].reactionsImage}
//                                             alt={selectedImageReactions[imageKey].reactionsName}
//                                         />
//                                     )}
//                                 </div>
//                             );
//                         })}

//                         {files.map((file, fileIndex) => (
//                             <a key={fileIndex} href={file.url} download={file.name}>
//                                 {file.name}
//                             </a>
//                         ))}
//                     </Box>
//                 );
//             })}
//             {imageUploaded.map((image, imgIndex) => (
//                 <img key={imgIndex} src={image.url} alt={image.name} />
//             ))}
//             {fileUploaded.map((file, fileIndex) => (
//                 <a key={fileIndex} href={file.url} download={file.name}>
//                     {file.name}
//                 </a>
//             ))}
//         </Box>
//     );
// };

// export default MessageDetails2;

// version 2:
const MessageDetails2 = ({ dataMessage, imageUploaded, fileUploaded }) => {
    const [hoveredTextIndex, setHoveredTextIndex] = useState(null);
    const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
    const [hoveredFileIndex, setHoveredFileIndex] = useState(null);
    const [selectedTextReactions, setSelectedTextReactions] = useState({});
    const [selectedImageReactions, setSelectedImageReactions] = useState({});
    const [selectedFileReactions, setSelectedFileReactions] = useState({});

    const handleTextMouseEnter = (messageIndex) => {
        setHoveredTextIndex(messageIndex);
    };

    const handleTextMouseLeave = () => {
        setHoveredTextIndex(null);
    };

    const handleImageMouseEnter = (messageIndex, imageIndex) => {
        setHoveredImageIndex({ messageIndex, imageIndex });
    };

    const handleImageMouseLeave = () => {
        setHoveredImageIndex(null);
    };

    const handleFileMouseEnter = (messageIndex, fileIndex) => {
        setHoveredFileIndex({ messageIndex, fileIndex });
    };

    const handleFileMouseLeave = () => {
        setHoveredFileIndex(null);
    };

    const handleTextReactionSelection = (reaction, messageIndex) => {
        setSelectedTextReactions({ ...selectedTextReactions, [messageIndex]: reaction });
    };

    const handleImageReactionSelection = (reaction, messageIndex, imageIndex) => {
        const imageKey = `${messageIndex}_${imageIndex}`;
        setSelectedImageReactions({ ...selectedImageReactions, [imageKey]: reaction });
    };

    const handleFileReactionSelection = (reaction, messageIndex, fileIndex) => {
        const fileKey = `${messageIndex}_${fileIndex}`;
        setSelectedFileReactions({ ...selectedFileReactions, [fileKey]: reaction });
    };
    return (
        <Box sx={{ overflowY: 'auto', maxHeight: '300px' }}>
            {dataMessage.map((message, messageIndex) => {
                const text = message[0];
                const images = message[1];
                const files = message[2];

                return (
                    <Box key={messageIndex} sx={{ position: 'relative', my: 1 }}>
                        {text.length > 0 && (
                            <Typography
                                onMouseEnter={() => handleTextMouseEnter(messageIndex)}
                                onMouseLeave={handleTextMouseLeave}
                                sx={{
                                    borderRadius: '12px',
                                    color: theme.palette.primaryText,
                                    fontSize: '13.5px',
                                    bgcolor: '#edf3f7',

                                    p: 1,
                                    position: 'relative',
                                    '::before': {
                                        position: 'absolute',
                                        content: '""',
                                        width: '100%',
                                        bgcolor: 'yellowgreen',
                                        height: '20px',
                                        top: '-10px',
                                        left: 0,
                                    },
                                }}
                            >
                                {text}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '-4px',
                                        left: 0,
                                        zIndex: 9999,
                                    }}
                                >
                                    {hoveredTextIndex === messageIndex && (
                                        <ReactionOnMessage
                                            handCloseReactions={() => setHoveredTextIndex(null)}
                                            onReactionSelect={(reaction) =>
                                                handleTextReactionSelection(reaction, messageIndex)
                                            }
                                            listDataReactions={[
                                                {
                                                    reactionsImage: Liked,
                                                    reactionsName: 'Liked a Message',
                                                },
                                                {
                                                    reactionsImage: Love,
                                                    reactionsName: 'Loved a Message',
                                                },
                                                {
                                                    reactionsImage: Laugh,
                                                    reactionsName: 'Laughed at a Message',
                                                },
                                                {
                                                    reactionsImage: Reply,
                                                    reactionsName: 'Replied to a Message',
                                                },
                                            ]}
                                        />
                                    )}
                                    {selectedTextReactions[messageIndex] && (
                                        <img
                                            src={selectedTextReactions[messageIndex].reactionsImage}
                                            alt={selectedTextReactions[messageIndex].reactionsName}
                                        />
                                    )}
                                </Box>
                            </Typography>
                        )}

                        {images.map((image, imgIndex) => {
                            const imageKey = `${messageIndex}_${imgIndex}`;
                            return (
                                <div
                                    key={imgIndex}
                                    onMouseEnter={() =>
                                        handleImageMouseEnter(messageIndex, imgIndex)
                                    }
                                    onMouseLeave={handleImageMouseLeave}
                                >
                                    <img src={image.url} alt={image.name} />

                                    {hoveredImageIndex &&
                                        hoveredImageIndex.messageIndex === messageIndex &&
                                        hoveredImageIndex.imageIndex === imgIndex && (
                                            <ReactionOnMessage
                                                handCloseReactions={() =>
                                                    setHoveredImageIndex(null)
                                                }
                                                onReactionSelect={(reaction) =>
                                                    handleImageReactionSelection(
                                                        reaction,
                                                        messageIndex,
                                                        imgIndex,
                                                    )
                                                }
                                                listDataReactions={listIconReactions}
                                            />
                                        )}

                                    {selectedImageReactions[imageKey] && (
                                        <img
                                            src={selectedImageReactions[imageKey].reactionsImage}
                                            alt={selectedImageReactions[imageKey].reactionsName}
                                        />
                                    )}
                                </div>
                            );
                        })}

                        {files.map((file, fileIndex) => {
                            const fileKey = `${messageIndex}_${fileIndex}`;
                            return (
                                <div
                                    key={fileIndex}
                                    onMouseEnter={() =>
                                        handleFileMouseEnter(messageIndex, fileIndex)
                                    }
                                    onMouseLeave={handleFileMouseLeave}
                                >
                                    <a href={file.url} download={file.name}>
                                        {file.name}
                                    </a>
                                    {hoveredFileIndex &&
                                        hoveredFileIndex.messageIndex === messageIndex &&
                                        hoveredFileIndex.fileIndex === fileIndex && (
                                            <ReactionOnMessage
                                                handCloseReactions={() => setHoveredFileIndex(null)}
                                                onReactionSelect={(reaction) =>
                                                    handleFileReactionSelection(
                                                        reaction,
                                                        messageIndex,
                                                        fileIndex,
                                                    )
                                                }
                                                listDataReactions={listIconReactions}
                                            />
                                        )}

                                    {selectedFileReactions[fileKey] && (
                                        <img
                                            src={selectedFileReactions[fileKey].reactionsImage}
                                            alt={selectedFileReactions[fileKey].reactionsName}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </Box>
                );
            })}

            {imageUploaded.map((image, imgIndex) => (
                <img key={imgIndex} src={image.url} alt={image.name} />
            ))}

            {fileUploaded.map((file, fileIndex) => (
                <a key={fileIndex} href={file.url} download={file.name}>
                    {file.name}
                </a>
            ))}
        </Box>
    );
};

export default MessageDetails2;

const listIconReactions = [
    {
        reactionsImage: Liked,
        reactionsName: 'Liked a Message',
    },
    {
        reactionsImage: Love,
        reactionsName: 'Loved a Message',
    },
    {
        reactionsImage: Laugh,
        reactionsName: 'Laughed at a Message',
    },
    {
        reactionsImage: Reply,
        reactionsName: 'Replied to a Message',
    },
];
