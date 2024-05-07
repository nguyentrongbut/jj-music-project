import HighlightMusic from "@/components/highlight-music/highlight.music";
import MusicNestedRouter from "@/components/music-nested-router/music.nested.router";

const MusicPage = () => {
    return (
        <main>
            <MusicNestedRouter></MusicNestedRouter>
            <HighlightMusic></HighlightMusic>
        </main>
    );
};

export default MusicPage;
