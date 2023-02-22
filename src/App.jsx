import { CssBaseline, AppBar, Toolbar, Typography, Box, Link, Container, Grid, Stack, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import AvatarCard from "./components/AvatarCard";
import MembersInfo from "./components/AvatarCard/info";
import Deliveries from "./deliveries";
import FileCard from "./components/FileCard";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {

  return (
    <>
      <CssBaseline />

      {/* Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          <Link href="#" color="inherit" underline="none">
            <Stack direction="row" alignItems="center">
              <HomeIcon sx={{ mr: 2 }} />
              <Typography variant="h6">Sensing My Home</Typography>
            </Stack>
          </Link>
          <Link href="#team" color="inherit" sx={{ ml: 3 }} variant="body1" underline="none">Team</Link>
          <Link href="#deliveries" color="inherit" sx={{ ml: 3 }} variant="body1" underline="none">Deliveries</Link>
        </Toolbar>
      </AppBar>
      {/* End of Navbar */}

      <main>
        {/* Hero Unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 15,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Sensing My Home
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Mobile App for monitoring plants and animals in a domestic environment.
              Get usefull tips, new recomendations and manage what makes your home complete.
            </Typography>
          </Container>
        </Box>
        {/* End of Hero Unit */}

        {/* Project Team */}
        <Container maxWidth="md" id="team">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Project Team
          </Typography>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            {MembersInfo.map((member, index) => {
              return (
                <Grid item key={index} xs={6} sm={6} md={4}>
                  <AvatarCard name={member.name} email={member.email} description={member.description} image={member.image} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
        {/* End of Project Team */}

        {/* Deliveries */}
        <Container maxWidth="md" sx={{ pt: 10, pb: 6 }} id="deliveries">
          <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Deliveries
            </Typography>
            {Deliveries.map(((delivery, index) => {
              return (
                <Accordion key={index} disabled={delivery.state}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{delivery.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={3} justifyContent="center">
                      {delivery.data.map(((file, i) => {
                        return (
                          <Grid item xs={12} sm={6} md={4} key={i}>
                            <FileCard name={file.name} link={file.link} icon={file.icon} />
                          </Grid>
                        )
                      }))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              )
            }))}
        </Container>
        {/* End of Deliveries */}
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 5 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Projeto em Informática (3ºAno LEI)
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
        >
          <Link href="https://www.ua.pt/" color="inherit">Universidade de Aveiro</Link>
        </Typography>
      </Box>
      {/* End of Footer */}
    </>
  )
}

export default App
