import CardMain from "./CardMain";
import grow from "../assets/images/illustration-grow-together.svg";
import following from "../assets/images/illustration-flowing-conversation.svg";
import users from "../assets/images/illustration-your-users.svg";

function Main() {
    return(
        <main className="container my-5">
            <CardMain
                title = "Grow Together"
                paragraph = "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
                image = {grow}
            />
            <CardMain
                title = "Flowing Conversations"
                paragraph = "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
                image = {following}
            />
            <CardMain
                title = "Your Users"
                paragraph = "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
                image = {users}
            />
        </main>
    );
}

export default Main;
