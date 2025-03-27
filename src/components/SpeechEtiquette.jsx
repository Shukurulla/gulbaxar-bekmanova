import { EmblaCarousel } from "./EmblaCarousel";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SpeechEtiquette = () => {
  const theme = useTheme();
  return (
    <div className="max-w-[1280px] lg:h-screen mx-auto px-4 lg:px-0 pb-12 lg:grid grid-cols-2 items-center">
      <EmblaCarousel />
      <div className="flex flex-col items-center lg:items-start gap-4">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-7xl">
          Speech Etiquette
        </h1>
        <p className="lg:text-left text-justify pb-4">
          Kópshilik aldında sóylew qosımshası anglichan tilin úyreniwdi hám
          shınıǵıw qılıwdı qálegen barlıq paydalanıwshılar ushın arnalǵan.
          Qosımsha jańa baslanuvchilar hám joqarı dárejedegi studentler ushın
          arnalǵan. Sizde anglichan tilinde sóylew qábileti bolıwı múmkin, bıraq
          adamlar aldında sóylew waqtında bul anglichan tilin biliw qábileti
          sizge járdem bermeydi. Sol sebepli siz ǵalabalıq sóylew sóylewdi
          úyreniwińiz kerek, hám siz ǵalabalıq sóylew sóylew kónlikpelerine
          ıyelewińiz kerek. Bul ǵalabalıq sóylew qosımshası kóplegen ámeliy
          ǵalabalıq sóylew shınıǵıwları arqalı sizdiń ishki qáweterińizdi
          jarıyaladı{" "}
        </p>
        <a
          href="https://api.citrusfiles.com/api/files/private_files/ksz8anlzqa7epql/speech_etiquette_gfGGk6dPLG.apk"
          download
        >
          <Button
            size={
              useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "large"
            }
            className="lg:self-start"
            variant="contained"
            endIcon={<DownloadIcon />}
          >
            Qosımshamızdı júklep alın{" "}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SpeechEtiquette;
