import { EmblaCarousel } from './EmblaCarousel'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const SpeechEtiquette = () => {
  const theme = useTheme();
  return (
    <div className='max-w-[1280px] lg:h-screen mx-auto px-4 lg:px-0 pb-12 lg:grid grid-cols-2 items-center'>
      <EmblaCarousel />
      <div className='flex flex-col items-center lg:items-start gap-4'>
        <h1 className='font-bold text-2xl md:text-4xl lg:text-7xl'>Speech Etiquette</h1>
        <p className='lg:text-left text-justify pb-4'>The Public Speaking app is designed for all users who want to learn and practice English in order to speak fluently with people The application is Public speaking for beginners and advanced level students. You may have English speaking skills, but these English language skills will not help you when you want to speak in front of people. That's why you need to learn how to speak publicly, and you need to acquire public speaking skills. This public speaking app has revealed your inner fear of public speaking through many practical public speaking exercises</p>
        <a href="https://api.citrusfiles.com/api/files/private_files/ksz8anlzqa7epql/speech_etiquette_gfGGk6dPLG.apk" download>
          <Button size={useMediaQuery(theme.breakpoints.down('sm')) ? 'small' : 'large'} className='lg:self-start' variant="contained" endIcon={<DownloadIcon />}>Download our app</Button>
        </a>
      </div>
    </div>
  )
}

export default SpeechEtiquette