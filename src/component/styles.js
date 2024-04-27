import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 'calc(100vh - 100px)',
    marginTop: '30px',
  },
  mapContainer: {
    flex: 3,
    height: '100%',
    overflow: 'hidden',
    marginRight: '15px', // add margin between map and list
  },
  listContainer: {
    width: '350px', // Adjust the width to your preference
    height: '87vh',
    overflowY: 'auto',
    backgroundColor: '#f7f7f7', // Light grey background for the sidebar
    padding: '20px', // Add padding for inner spacing
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background for each item
    borderRadius: '8px', // Rounded corners for modern look
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Subtle shadow for depth
    marginBottom: '15px', // Space between items
    transition: '0.3s', // Smooth transition for hover effect
    '&:hover': {
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)', // More pronounced shadow on hover
    },
  },

  listItemContent: {
    padding: '15px', // Padding inside each list item
    width: '100%', // Ensure it fills the space next to the image
  },

  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': { zIndex: 2 },
    '& img': {
      width: '50px', // Decrease the width as needed
      height: '50px', // Decrease the height as needed
    },
  },
  typography: {
    cursor: 'pointer',
  },
  pointer: {
    cursor: 'pointer',
  },
  paper: {
    padding: '2px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
  },
  card: {
    padding: '10px',
    marginBottom: '10px',
  },
  media: {
    height: 250,
  },
  cardContent: {
    padding: '10px',
  },
  chip: {
    margin: '4px',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  list: {
    marginTop: '10px',
    height: 'calc(100vh - 100px)',
    overflowY: 'scroll',
  },
  placeItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    overflow: 'hidden',
    borderBottom: '1px solid #ddd', // if you want a separator between items
    marginBottom: '10px',
  },
  placeImage: {
    width: '120px', // Set a fixed width for the image
    height: '120px', // Set a fixed height for the image
    borderRadius: '8px 0 0 8px', // Only rounded on the left side to match the card
    objectFit: 'cover', // Ensures the image covers the area without stretching
    flexShrink: 0, // Prevents the image from shrinking when the content overflows
  },
});

export default useStyles;