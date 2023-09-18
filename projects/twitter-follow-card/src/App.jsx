import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
    {
        username: "Sanreinoso06",
        name: "Santiago Reinoso",
        isFollowing: true,
    },
    {
        username: "yeraalgallego",
        name: "Yeral",
        isFollowing: false,
    },
    {
        username: "midudev",
        name: "Miguel Ángel Durán",
        isFollowing: true,
    },
    {
        username: "freddier",
        name: "Freddy Vega",
        isFollowing: true,
    },
    {
        username: "alertanews24",
        name: "Alerta News 24",
        isFollowing: false,
    },
    {
        username: "valeriagiraldot",
        name: "Model Girl",
        isFollowing: true,
    },
];

function App() {
    const formatUsername = (username) => {
        return `@${username}`;
    };

    return (
        <section className="App">
            { 
                users.map( (user) =>  { 
                    return (
                        <TwitterFollowCard
                            formatUsername={formatUsername}
                            key={user.username}
                            username={user.username}
                            name={user.isFollowing}
                            isFollowing={user.isFollowing}/>
                    )}
                )
            }
        </section>
    );
}

export default App;
