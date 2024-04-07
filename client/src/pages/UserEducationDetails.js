import React, { useState } from 'react';
import { Avatar, Box, Divider, IconButton, Typography } from '@mui/material';
import { CustomizeBox } from '../components/CustomizeBox/CustomizeBox';
import { CustomizeTypography } from '../components/CustomizeTypography/CustomizeTypography';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditInformationForm from '../components/EditInformationForm/EditInformationForm';
import { backToPreviousPage } from '../components/BackToPreviousPage/BackToPreviousPage';
import EducationContent from '../components/EducationContent/EducationContent';
import EducationListModal from '../components/EducationListModal/EducationListModal';

const educationInformation = [
    {
        schoolImage:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRUm0Me-xFn4_Hl1XBI_LuKghm6PPKxXaPEaqEU4yMA&s',
        schoolName: 'University of Information Technology',
        startDate: 'March 2025',
        endDate: 'Feb 2026',
    },
    {
        schoolImage: 'https://hcmut.edu.vn/img/nhanDienThuongHieu/01_logobachkhoatoi.png',
        schoolName: 'Ho Chi Minh City University of Technology',
        startDate: 'June 2028',
        endDate: 'May 2030',
    },
    {
        schoolImage:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUAIcr6Q9Rrm4FIBxNPfUsthbLPQ7Ztc2PaGtyZn_Zw&s',
        schoolName: 'Ho Chi Minh City University of Technology and Education',
        startDate: '2020',
        endDate: '2025',
    },
];

function UserEducationDetails() {
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
    const [isEducationListModalOpen, setIsEducationListModalOpen] = useState(false);
    const handleOpenUserProfile = () => {
        setIsUserProfileOpen(true);
    };

    const handleCloseUserProfile = () => {
        setIsUserProfileOpen(false);
    };

    const handleOpenEducationListModal = () => {
        setIsEducationListModalOpen(true); // Mở modal danh sách education khi người dùng click vào button
    };

    const handleCloseEducationListModal = () => {
        setIsEducationListModalOpen(false); // Đóng modal danh sách education
    };

    return (
        <CustomizeBox sx={{ p: 0 }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 1,
                }}
            >
                <IconButton onClick={backToPreviousPage}>
                    <KeyboardBackspaceOutlinedIcon sx={{ fontSize: '28px' }} />
                </IconButton>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    }}
                >
                    <CustomizeTypography fs="20px" fw={true}>
                        Education
                    </CustomizeTypography>
                    <Box>
                        <IconButton onClick={handleOpenEducationListModal}>
                            <ControlCameraOutlinedIcon sx={{ fontSize: '28px' }} />
                        </IconButton>
                        <IconButton>
                            <AddOutlinedIcon sx={{ fontSize: '28px' }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Divider />
            {educationInformation.map((school, index) => (
                <Box sx={{ p: '12px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            py: 1,
                        }}
                    >
                        <Avatar
                            src={school.schoolImage}
                            alt={school.schoolName}
                            sx={{ height: 50, width: 50, borderRadius: 0 }}
                        />
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            {/* school name
                        time to attend this school */}
                            <Box sx={{ px: 1 }}>
                                <CustomizeTypography fs="14px" fw={true}>
                                    {/* University of Information Technology */}
                                    {school.schoolName}
                                </CustomizeTypography>

                                <CustomizeTypography fs="12px" sx={{ color: '#404040', mt: '4px' }}>
                                    {/* March 2024 - Feb 2025 */}
                                    {school.startDate} - {school.endDate}
                                </CustomizeTypography>
                            </Box>
                            <IconButton onClick={handleOpenUserProfile}>
                                <EditOutlinedIcon sx={{ fontSize: '28px' }} />
                            </IconButton>
                        </Box>
                    </Box>
                    {index === educationInformation.length - 1 ? null : <Divider />}
                </Box>
            ))}
            <EditInformationForm
                isOpen={isUserProfileOpen}
                handleClose={handleCloseUserProfile}
                editContent={'Edit Education'}
                actionContent={'Delete education'}
            >
                {/* ahiahi */}
                <EducationContent />
            </EditInformationForm>
            <EducationListModal
                isOpen={isEducationListModalOpen}
                handleClose={handleCloseEducationListModal}
                list={educationInformation}
                // Bổ sung props và hàm xử lý thay đổi vị trí của education (nếu cần)
            />
        </CustomizeBox>
    );
}

export default UserEducationDetails;
