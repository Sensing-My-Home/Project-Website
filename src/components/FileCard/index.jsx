import { Card, CardContent, Stack, Typography } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TvIcon from '@mui/icons-material/Tv';

function FileCard({ name, link, icon }) {
    return (
        <>
            <a download href={link}>
                <Card>
                    <CardContent>
                        <Stack alignItems="center">
                            {icon === "pdf" ? <PictureAsPdfIcon fontSize='large'/> : <TvIcon fontSize='large'/>}
                            <Typography>{name}</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </a>
        </>
    )
}

export default FileCard;