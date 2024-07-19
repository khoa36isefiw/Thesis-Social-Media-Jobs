import React from 'react';
import Post from './Post';
import { Typography } from '@mui/material';
import Mountain from '../../assets/images/MountainClouds.jpeg';
import { useSelector } from 'react-redux';
// import Beach from '../../assets/images/BeachSunset.jpeg';

export const posts = [
    {
        id: 1,
        avatarSrc: Mountain,
        avatarSrc: {
            imgUrl: Mountain,
            imageStyle: null,
            imageRotationAngle: 0,
        },
        displayName: 'Shawn Hoffman',
        followers: '14,123',
        // time: '1d',
        time: '2024-06-22T18:18:19.309Z',
        hashtag: '#newyear',
        content: [
            '✨✨✨ Happy New Year of the Dragon!!!!\n',
            'FPT IS sincerely wishes you a peaceful and happy new year.',

            // '✨✨✨ Happy New Year of the Dragon!!!!',
            // 'FPT IS sincerely wishes you a peaceful and happy new year.',
        ],
        numberOfReaction: 112,
        numberOfComment: 88,
        // imageUrl: Mountain,
        imageUrl:
            'https://people.com/thmb/JyE3_wRjlG6r3jlsVPgl0gbVXJ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/year-of-the-dragon-020624-tout-f82b60115a9d462dbf2a40256e40c7ae.jpg',
        viewPostPermission: true,
    },
    {
        id: 2,
        avatarSrc: {
            imgUrl: 'https://i.vietgiaitri.com/2018/10/15/husky-loai-cho-ngao-ngo-nhat-qua-dat-601208.jpg',
            imageStyle: null,
            imageRotationAngle: 0,
        },
        // avatarSrc:
        //     'https://i.vietgiaitri.com/2018/10/15/husky-loai-cho-ngao-ngo-nhat-qua-dat-601208.jpg',
        displayName: 'John Doe',
        followers: '8,765',
        // time: '3h',
        time: '2024-06-29T03:18:19.309Z',
        hashtag: '#sunset #beachlife',
        content: ['Enjoying a beautiful sunset at the beach.', '#sunset #beachlife'],
        numberOfReaction: 200,
        numberOfComment: 45,
        imageUrl: 'https://www.surfertoday.com/images/stories/beach-sunset.jpg',
        viewPostPermission: true,
    },
    {
        id: 3,
        // avatarSrc:
        //     'https://i.vietgiaitri.com/2018/10/15/husky-loai-cho-ngao-ngo-nhat-qua-dat-1312f4.jpg',
        avatarSrc: {
            imgUrl: 'https://i.vietgiaitri.com/2018/10/15/husky-loai-cho-ngao-ngo-nhat-qua-dat-1312f4.jpg',
            imageStyle: null,
            imageRotationAngle: 0,
        },
        displayName: 'Husky Siberian',
        followers: '12',
        // time: '21h',
        time: '2024-06-29T01:18:19.309Z',
        hashtag: '',
        content: 'What should I do if I want to become a Front-End Developer?',
        numberOfReaction: 12,
        numberOfComment: 0,
        imageUrl: null,
        viewPostPermission: true,
    },
    {
        id: 4,
        avatarSrc: {
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4M9ivjYIFvfc8ZdvJRB9yfO5rLd9DuS4I1g&usqp=CAU',
            imageStyle: null,
            imageRotationAngle: 180,
        },
        displayName: `Vanvietbooks' Page`,
        followers: '285,010',
        // time: '12h',

        time: '2024-06-28T02:18:19.309Z',
        hashtag: '#quote_of_the_day #365ngayhanhphuc',
        content: [
            'Nếu phải lựa chọn giữa bóng tối và ánh sáng, tốt nhất bạn nên lựa chọn tin tưởng vào ánh sáng, bởi vì nó sẽ cho bạn nhìn thấy hy vọng, còn trong bóng tối vĩnh viễn chỉ có tuyệt vọng. Cho dù chưa từng nhìn thấy ánh sáng, nhưng bạn hãy cứ lựa chọn tin tưởng, bởi sống có tín ngưỡng sẽ khiến cuộc đời của bạn không phải là đầm nước c h ế t.\n',
            'Nếu phải lựa chọn giữa bóng tối và ánh sáng, tốt nhất bạn nên lựa chọn tin tưởng vào ánh sáng, bởi vì nó sẽ cho bạn nhìn thấy hy vọng, còn trong bóng tối vĩnh viễn chỉ có tuyệt vọng. Cho dù chưa từng nhìn thấy ánh sáng, nhưng bạn hãy cứ lựa chọn tin tưởng, bởi sống có tín ngưỡng sẽ khiến cuộc đời của bạn không phải là đầm nước c h ế t.',
            'Nếu phải lựa chọn giữa bóng tối và ánh sáng, tốt nhất bạn nên lựa chọn tin tưởng vào ánh sáng, bởi vì nó sẽ cho bạn nhìn thấy hy vọng, còn trong bóng tối vĩnh viễn chỉ có tuyệt vọng. Cho dù chưa từng nhìn thấy ánh sáng, nhưng bạn hãy cứ lựa chọn tin tưởng, bởi sống có tín ngưỡng sẽ khiến cuộc đời của bạn không phải là đầm nước c h ế t.',
            'Nếu phải lựa chọn giữa bóng tối và ánh sáng, tốt nhất bạn nên lựa chọn tin tưởng vào ánh sáng, bởi vì nó sẽ cho bạn nhìn thấy hy vọng, còn trong bóng tối vĩnh viễn chỉ có tuyệt vọng. Cho dù chưa từng nhìn thấy ánh sáng, nhưng bạn hãy cứ lựa chọn tin tưởng, bởi sống có tín ngưỡng sẽ khiến cuộc đời của bạn không phải là đầm nước c h ế t.',
            'Nếu phải lựa chọn giữa bóng tối và ánh sáng, tốt nhất bạn nên lựa chọn tin tưởng vào ánh sáng, bởi vì nó sẽ cho bạn nhìn thấy hy vọng, còn trong bóng tối vĩnh viễn chỉ có tuyệt vọng. Cho dù chưa từng nhìn thấy ánh sáng, nhưng bạn hãy cứ lựa chọn tin tưởng, bởi sống có tín ngưỡng sẽ khiến cuộc đời của bạn không phải là đầm nước c h ế t.',
            'Nếu phải lựa chọn giữa bóng tối và ánh sáng, tốt nhất bạn nên lựa chọn tin tưởng vào ánh sáng, bởi vì nó sẽ cho bạn nhìn thấy hy vọng, còn trong bóng tối vĩnh viễn chỉ có tuyệt vọng. Cho dù chưa từng nhìn thấy ánh sáng, nhưng bạn hãy cứ lựa chọn tin tưởng, bởi sống có tín ngưỡng sẽ khiến cuộc đời của bạn không phải là đầm nước c h ế t.',
        ],
        numberOfReaction: 122,
        numberOfComment: 0,
        imageUrl:
            'https://lightingequipmentsales.com/wp-content/uploads/2018/03/Daylight-Illuminance-740x416.jpg',
        viewPostPermission: false, // show icon public or connections only
    },
];

function Feed() {
    // redux
    const getListDataArticlesPosted = useSelector((state) => state.managePost.listPostsData);
    console.log('List Data: ', getListDataArticlesPosted);
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    postID={post.id}
                    avatarSrc={post.avatarSrc}
                    displayName={post.displayName}
                    followers={post.followers}
                    time={post.time}
                    hashtag={post.hashtag}
                    content={post.content}
                    numberOfReaction={post.numberOfReaction}
                    numberOfComment={post.numberOfComment}
                    imageUrl={post.imageUrl}
                    viewPostPermission={post.viewPostPermission}
                >
                    {/* Tách nội dung thành các đoạn văn */}
                    {Array.isArray(post.content) ? (
                        post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                    ) : (
                        <Typography sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                            {post.content}
                        </Typography>
                    )}
                </Post>
            ))}

            {getListDataArticlesPosted.map((post) => (
                <Post
                    key={post.id}
                    postID={'8'}
                    avatarSrc={post.userPhoto}
                    displayName={post.userName}
                    followers={post.numberOfFollowers}
                    time={post.timestamp}
                    hashtag={null}
                    content={post.articleText}
                    numberOfReaction={null}
                    numberOfComment={null}
                    imageUrl={post.listImage}
                    viewPostPermission={post.viewPostPermission}
                >
                    {/* Tách nội dung thành các đoạn văn */}
                    {Array.isArray(post.content) ? (
                        post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                    ) : (
                        <Typography>{post.content}</Typography>
                    )}
                </Post>
            ))}
        </div>
    );
}

export default Feed;
