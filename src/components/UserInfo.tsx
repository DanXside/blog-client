import { Box, Typography } from "@mui/material";

const UserInfo = () => {
    return (
        <>
            <Box className="userInfo-back" >
            </Box>
            <Box className="userInfo-wrap">
                <Box className="userInfo-avatar">
                </Box>
                <Typography variant="h3" component="h3" sx={{
                    fontWeight: 400,
                    fontSize: '1.8rem',
                    color: '#ffffff',
                    textAlign: 'center'
                }}>
                    Даниил Моисеев
                </Typography>
                <Typography variant="h4" component="h4" sx={{
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    color: '#ffffff',
                    textAlign: 'center'
                }}>
                    Email
                </Typography>
                <Typography variant="h4" component="h4" sx={{
                    fontWeight: 300,
                    fontSize: '1.4rem',
                    color: '#DEDEDE',
                    textAlign: 'center'
                }}>
                    Пользователь блога
                </Typography>
            </Box>
        </>
    )
}

export default UserInfo;