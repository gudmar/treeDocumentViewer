

const doc = {
    title: 'Magic, the gathering cheet sheet',
    description: 'Quick rules',
    content: [
        {
            title: 'Tura / turn',
            description: `
            <p>Tura podzielona jest na fazy</p>
            <ul>
                <li><b>Untap</b>: odtapuj permanenty</li>
                <li><b>Upkeep</b>: zdarzenia mające miejsce w każdej turze</li>
                <li><b>Draw</b>: weź kartę</li>
                <li><b>Main</b>: Zagraj: lond, kreaturę, Socery, Enchantment, Artifact..</li>
                <li>
                    <b>Attack</b>: Zadeklaruj atak
                    <ul>
                        <li><b>I faze:</b> first strike, double strike</b></li>
                        <li><b>II faza:</b> reszta kreatur
                </li>
                <li><b>Main</b></li>
                <li><b>Cleanup</b>: Mana burn</li>
            </ul>
            `
        },
        {
            title: 'Permanent',
            description: 'Creature, land, enchantment, equipement, artifact',
            content: [  
                {
                    title: 'land',
                    description: 'Nie czar, nie można skontrować, 1 na turę,',
                    content: []
                },
                {
                    title: 'creature',
                    description: 'Czar, można skontrować',
                    content: []
                },
                {
                    title: 'artifact',
                    description: 'Czar, można skontrować, 1 na turę,',
                    content: []
                },


            ]
        }
    ]
}

export default function getData(){
    console.log('DOC')
    return doc;
}