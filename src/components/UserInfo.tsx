import { Box, Typography } from "@mui/material";
import { userAPI } from "../services/UserService";

const UserInfo = () => {
    const {data} = userAPI.useGetUserQuery(undefined);

    return (
        <>
            <Box className="userInfo-back" >
            </Box>
            <Box className="userInfo-wrap">
                {
                    data?.avatar
                    ? 
                    <Box className="userInfo-avatar" sx={{
                        background: `url(http://localhost:3001${data.avatar ?? ""}) center center/cover no-repeat`
                    }}>
                    </Box>
                    :
                    <Box sx={{
                        width: '10rem',
                        height: '10rem',
                        borderRadius: '10rem',
                        backgroundColor: '#272727'
                    }}>
                    </Box>
                }
                <Typography variant="h3" component="h3" sx={{
                    fontWeight: 400,
                    fontSize: '1.8rem',
                    color: '#ffffff',
                    textAlign: 'center'
                }}>
                    {data?.name ?? ''}
                </Typography>
                <Typography variant="h4" component="h4" sx={{
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    color: '#ffffff',
                    textAlign: 'center'
                }}>
                    {data?.email ?? ''}
                </Typography>
                <Typography variant="h4" component="h4" sx={{
                    fontWeight: 300,
                    fontSize: '1.4rem',
                    color: '#DEDEDE',
                    textAlign: 'center'
                }}>
                    {data?.roles === 'ADMIN' ? 'Администратор' : 'Пользователь'} блога
                </Typography>
            </Box>
        </>
    )
}

export default UserInfo;