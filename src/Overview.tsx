import React from "react";
import AppIcon from "./AppIcon";

class Overview extends React.Component<{}, {}>
{
    overview = React.createRef<HTMLDivElement>();

    scroll_overview = (position: number) =>
    {
        if (this.overview.current)
        {
            this.overview.current.scroll({
                top: position
            });
        }
    }

    on_overview_scroll = (event: WheelEvent) =>
    {
        event.preventDefault();

        this.scroll_overview(150);
    }

    componentDidMount()
    {
        const overview = this.overview.current!;

        overview.addEventListener(
            "wheel", this.on_overview_scroll, false
        );
    }

    render()
    {
        return(
            <div className="overview">
                <div ref={this.overview} className="overview-inner">
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />

                    <AppIcon icon="reddit" label="Reddit" bg="#FF5700" />
                    <AppIcon icon="reddit" label="Reddit" bg="#FF5700" />
                    <AppIcon icon="reddit" label="Reddit" bg="#FF5700" />
                    <AppIcon icon="reddit" label="Reddit" bg="#FF5700" />
                    <AppIcon icon="reddit" label="Reddit" bg="#FF5700" />
                    <AppIcon icon="reddit" label="Reddit" bg="#FF5700" />

                    <AppIcon icon="steam" label="Steam" bg="#19374e" />
                    <AppIcon icon="steam" label="Steam" bg="#19374e" />
                    <AppIcon icon="steam" label="Steam" bg="#19374e" />
                    <AppIcon icon="steam" label="Steam" bg="#19374e" />
                    <AppIcon icon="steam" label="Steam" bg="#19374e" />
                    <AppIcon icon="steam" label="Steam" bg="#19374e" />

                    <AppIcon icon="gitlab" label="GitLab" bg="#fc6d26" />
                    <AppIcon icon="gitlab" label="GitLab" bg="#fc6d26" />
                    <AppIcon icon="gitlab" label="GitLab" bg="#fc6d26" />
                    <AppIcon icon="gitlab" label="GitLab" bg="#fc6d26" />
                    <AppIcon icon="gitlab" label="GitLab" bg="#fc6d26" />
                    <AppIcon icon="gitlab" label="GitLab" bg="#fc6d26" />

                    <AppIcon icon="google" label="Google" bg="#0f9d58" />
                    <AppIcon icon="google" label="Google" bg="#0f9d58" />
                    <AppIcon icon="google" label="Google" bg="#0f9d58" />
                    <AppIcon icon="google" label="Google" bg="#0f9d58" />
                    <AppIcon icon="google" label="Google" bg="#0f9d58" />
                    <AppIcon icon="google" label="Google" bg="#0f9d58" />

                    <AppIcon icon="email" label="ProtonMail" bg="#505061" />
                    <AppIcon icon="email" label="ProtonMail" bg="#505061" />
                    <AppIcon icon="email" label="ProtonMail" bg="#505061" />
                    <AppIcon icon="email" label="ProtonMail" bg="#505061" />
                    <AppIcon icon="email" label="ProtonMail" bg="#505061" />
                    <AppIcon icon="email" label="ProtonMail" bg="#505061" />
                </div>
            </div>
        );
    }
}

export default Overview;