import { Card, CardContent, Stack, Typography } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TvIcon from '@mui/icons-material/Tv';

function getFileIcon(icon) {
    switch(icon) {
        case 'PDF':
            return (<PictureAsPdfIcon />);
        default:
            return (<TvIcon />)
    }
}

function FileCard({ name, link, icon }) {
    return (
        <>
            <a download href={link}>
                <Card>
                    <CardContent>
                        <Stack alignItems="center">
                            {getFileIcon(icon)}
                            <Typography>{name}</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </a>
        </>
    )
}

export default FileCard;