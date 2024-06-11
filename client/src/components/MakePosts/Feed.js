import React from 'react';
import Post from './Post';
import { Typography } from '@mui/material';
import Mountain from '../../assets/images/MountainClouds.jpeg';
// import Beach from '../../assets/images/BeachSunset.jpeg';

export const posts = [
    {
        id: 1,
        avatarSrc: Mountain,
        displayName: 'Shawn Hoffman',
        followers: '14,123',
        time: '1d',
        content: [
            '✨✨✨ Happy New Year of the Dragon!!!!',
            'FPT IS sincerely wishes you a peaceful and happy new year.',

            // '✨✨✨ Happy New Year of the Dragon!!!!',
            // 'FPT IS sincerely wishes you a peaceful and happy new year.',
        ],
        numberOfReaction: 112,
        numberOfComment: 88,
        // imageUrl: Mountain,
        imageUrl:
            'https://people.com/thmb/JyE3_wRjlG6r3jlsVPgl0gbVXJ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/year-of-the-dragon-020624-tout-f82b60115a9d462dbf2a40256e40c7ae.jpg',
    },
    {
        id: 2,
        avatarSrc:
            'https://i.vietgiaitri.com/2018/10/15/husky-loai-cho-ngao-ngo-nhat-qua-dat-601208.jpg',
        displayName: 'John Doe',
        followers: '8,765',
        time: '3h',
        content: ['Enjoying a beautiful sunset at the beach.', '#sunset #beachlife'],
        numberOfReaction: 200,
        numberOfComment: 45,
        imageUrl: 'https://www.surfertoday.com/images/stories/beach-sunset.jpg',
    },
    {
        id: 3,
        avatarSrc:
            'https://i.vietgiaitri.com/2018/10/15/husky-loai-cho-ngao-ngo-nhat-qua-dat-1312f4.jpg',
        displayName: 'Husky Siberian',
        followers: '12',
        time: '21h',
        content: 'What should I do if I want to become a Front-End Developer?',
        numberOfReaction: 12,
        numberOfComment: 0,
        imageUrl: null,
    },
    {
        id: 4,
        avatarSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4M9ivjYIFvfc8ZdvJRB9yfO5rLd9DuS4I1g&usqp=CAU',
        displayName: `Vanvietbooks' Page`,
        followers: '285,010',
        time: '12h',
        content: [
            '#quote_of_the_day #365ngayhanhphuc',
            'Nếu phải lựa chọn giữa bóng tối và ánh sáng, tốt nhất bạn nên lựa chọn tin tưởng vào ánh sáng, bởi vì nó sẽ cho bạn nhìn thấy hy vọng, còn trong bóng tối vĩnh viễn chỉ có tuyệt vọng. Cho dù chưa từng nhìn thấy ánh sáng, nhưng bạn hãy cứ lựa chọn tin tưởng, bởi sống có tín ngưỡng sẽ khiến cuộc đời của bạn không phải là đầm nước c h ế t.',
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
    },
];

function Feed() {
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
                    content={post.content}
                    numberOfReaction={post.numberOfReaction}
                    numberOfComment={post.numberOfComment}
                    imageUrl={post.imageUrl}
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
