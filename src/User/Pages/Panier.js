import CommandeProduit from "../Components/CommandeProduit";
import Commande from "../Components/Commande";

function Panier()
{
    return (
        <div>
            <h1>Mon panier</h1>
            <div>
                <CommandeProduit />
            </div>
            <div>
                <Commande />
            </div>
        </div>
    )
}

export default Panier;