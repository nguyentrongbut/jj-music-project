import HighlightMusic from "@/components/highlight-music/highlight.music";
import MusicNestedRouter from "@/components/music-nested-router/music.nested.router";

const HighlightPage = () => {
    return (
        <main>
            <MusicNestedRouter/>
            <HighlightMusic></HighlightMusic>
        </main>
    );
};

export default HighlightPage;
