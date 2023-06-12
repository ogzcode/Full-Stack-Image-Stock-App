import Header from "./header/Header.jsx";
import Main from "./Main";
import Footer from "./Footer";
import { ImageProvider } from "../context/useImage.jsx";


export default function Profile() {
    return (
        <div className="min-h-screen relative bg-black/20">
            <ImageProvider>
                <Header />
                <Main />
            </ImageProvider>
            <Footer />
        </div>
    );
}