import {
    GET_BIRTH_DATE,
    GET_DAY,
    GET_MONTH,
    SET_SELECTED_IMAGE_ROTATION_ANGLE,
    GET_YEAR,
    PHOTO_VIEWING_RIGHTS,
    SAVE_ACCOUNT_SIGNUP,
    SET_SELECTED_FILTER_INDEX,
    USER_LOGGED_IN_INFORMATION,
    SET_SELECTED_FILTER_INDEX_BG,
    SET_SELECTED_BG_ROTATION_ANGLE,
    UPDATE_ACCOUNT_INFORMATION,
} from '../actionConstant';
import DefaultBackgroundImage from '../../assets/images/DefaultBackgroundImage.jpeg';
const initialState = {
    // accountsList: [], // initial state
    // use for testing data
    accountsList: [
        {
            userId: 'ro',
            firstName: 'Tido',
            lastName: 'Kang',
            additionalName: '',
            birthDate: '12-6-2000',
            userName: 'tido',
            password: 'tido',
            // default image
            userPhoto: {
                imgUrl: 'https://i.ytimg.com/vi/03m73QN8pc4/maxresdefault.jpg',
                imageStyle: null,
                imageRotationAngle: 0,
            },
            // default background image/ photo for user who logged in
            userBackgroundPhoto: {
                bgUrl: DefaultBackgroundImage,
                bgStyle: null,
                bgRotationAngle: 0,
            },

            followers: 0,
        },
        {
            userId: 'r11',
            firstName: 'Mahiru',
            lastName: 'Shiina',
            additionalName: '',
            birthDate: '12-6-2003',
            userName: 'shiina',
            password: 'shiina',
            // default image
            userPhoto: {
                imgUrl: 'https://product.hstatic.net/200000294254/product/resize_image__14__dd47143553f24606b633b898d98d5a4c_master.jpg',
                imageStyle: null,
                imageRotationAngle: 0,
            },
            // default background image/ photo for user who logged in
            userBackgroundPhoto: {
                bgUrl: DefaultBackgroundImage,
                bgStyle: null,
                bgRotationAngle: 0,
            },

            followers: 0,
        },
    ],
    // loggedInUser: 'Luna Kei', // initial state
    loggedInUser: {
        // use for test data
        userId: 'ro',
        firstName: 'Tido',
        lastName: 'Kang',
        additionalName: '',
        birthDate: '12-6-2000',
        userName: 'tido',
        password: 'tido',
        // default image
        userPhoto: {
            imgUrl: 'https://i.ytimg.com/vi/03m73QN8pc4/maxresdefault.jpg',
            imageStyle: null,
            imageRotationAngle: 0,
        },
        // default background image/ photo for user who logged in
        userBackgroundPhoto: {
            bgUrl: DefaultBackgroundImage,
            bgStyle: null,
            bgRotationAngle: 0,
        },

        followers: 0,
    },

    birthDate: '',
    day: '',
    month: '',
    year: '',
    setViewingRights: 'All Aikotoba members',
    selectedFilterIndex: 0,
    selectedImageAngle: 0, // get the angle of the selected image
    selectedBackgroundFilterIndex: 0,
    selectedBackgroundAngle: 0,
};

export const manageAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ACCOUNT_SIGNUP:
            const { account } = action.payload;

            return {
                ...state,
                accountsList: [...state.accountsList, account],
            };

        case UPDATE_ACCOUNT_INFORMATION:
            // get payload
            const { userId: updateUserId, updatedInfor } = action.payload;

            return {
                // check in account list which userId (user) is selected to change their information
                accountsList: state.accountsList.map(
                    (account) =>
                        account.userId === updateUserId
                            ? {
                                  ...account,
                                  ...updatedInfor,
                              }
                            : account, //stable
                ),

                // update directly for authenticated user
                // based on userId
                loggedInUser:
                    state.loggedInUser.userId === updateUserId
                        ? {
                              ...state.loggedInUser,
                              ...updatedInfor,
                          }
                        : state.loggedInUser,
            };

        case USER_LOGGED_IN_INFORMATION:
            const { user } = action.payload;
            return {
                ...state,
                loggedInUser: user,
            };

        case GET_BIRTH_DATE:
            const { birthday } = action.payload;
            return {
                ...state,
                birthDate: birthday,
            };

        case GET_DAY:
            const { day } = action.payload;
            return {
                ...state,
                day: day,
            };

        case GET_MONTH:
            const { month } = action.payload;
            return {
                ...state,
                month: month,
            };
        case GET_YEAR:
            const { year } = action.payload;
            return {
                ...state,
                year: year,
            };
        case PHOTO_VIEWING_RIGHTS:
            const { viewing } = action.payload;
            return {
                ...state,
                setViewingRights: viewing,
            };
        case SET_SELECTED_FILTER_INDEX:
            const { filter, userId: usrId } = action.payload;

            return {
                ...state,
                // update angle for user
                accountsList: state.accountsList.map((account) =>
                    account.userId === usrId
                        ? {
                              ...account,
                              userPhoto: {
                                  ...account.userPhoto,
                                  imageStyle: filter,
                              },
                          }
                        : account,
                ),
                // update angle for authenticated user
                loggedInUser:
                    state.loggedInUser.userId === usrId
                        ? {
                              ...state.loggedInUser,
                              userPhoto: {
                                  ...state.loggedInUser.userPhoto,
                                  imageStyle: filter,
                              },
                          }
                        : state.loggedInUser,
            };
        case SET_SELECTED_IMAGE_ROTATION_ANGLE:
            // return {
            //     ...state,
            //     selectedImageAngle: action.payload,
            // };
            const { angle, userId } = action.payload;
            return {
                ...state,
                // update angle for user
                accountsList: state.accountsList.map((account) =>
                    account.userId === userId
                        ? {
                              ...account,
                              userPhoto: {
                                  ...account.userPhoto,
                                  imageRotationAngle: angle,
                              },
                          }
                        : account,
                ),
                // update angle for authenticated user
                loggedInUser:
                    state.loggedInUser.userId === userId
                        ? {
                              ...state.loggedInUser,
                              userPhoto: {
                                  ...state.loggedInUser.userPhoto,
                                  imageRotationAngle: angle,
                              },
                          }
                        : state.loggedInUser,
            };
        case SET_SELECTED_FILTER_INDEX_BG:
            const { bgFilter, userId: uId } = action.payload;
            return {
                ...state,
                // update angle for user
                accountsList: state.accountsList.map((account) =>
                    account.userId === uId
                        ? {
                              ...account,
                              userBackgroundPhoto: {
                                  ...account.userBackgroundPhoto,
                                  bgStyle: bgFilter,
                              },
                          }
                        : account,
                ),
                // update angle for authenticated user
                loggedInUser:
                    state.loggedInUser.userId === uId
                        ? {
                              ...state.loggedInUser,
                              userBackgroundPhoto: {
                                  ...state.loggedInUser.userBackgroundPhoto,
                                  bgStyle: bgFilter,
                              },
                          }
                        : state.loggedInUser,
            };
        case SET_SELECTED_BG_ROTATION_ANGLE:
            return {
                ...state,
                selectedBackgroundAngle: action.payload,
            };
        default:
            return state;
    }
};
