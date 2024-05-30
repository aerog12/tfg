import "/styles/general.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

export const metadata = {
  title: "Aerog Travel",
  description: "pagina de viajes god",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
