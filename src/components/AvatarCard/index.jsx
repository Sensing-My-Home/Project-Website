import { Avatar, Typography, Stack, Link } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function AvatarCard({ name, email, description, image, linkedin, github }) {
    return(
        <>
            <Stack
                justifyContent="center"
                alignItems="center"
            >
                <Avatar alt={name} src={image} sx={{width: 100, height: 100}}/>
                <Typography variant="body1">{name}</Typography>
                <Typography variant="body2">{description}</Typography>
                <Typography variant="caption">{email}</Typography>
                <Stack direction="row" spacing={1}>
                    <Link href="" color="primary"><LinkedInIcon /></Link>
                    <Link href="" color="inherit"><GitHubIcon /></Link>
                </Stack>
            </Stack>
        </>
    )
}

export default AvatarCard