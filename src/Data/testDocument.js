

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
        },

        {
            title: 'Zdolności',
            description: 'Słownik zdolności:',
            content: [
                {
                    title: 'Haste',
                    description: `Unaffected by summoning sicknes: kreatura może atakować w turze, w 
                    której została wstawiona do gry`,
                    content: []
                },
                {
                    title: 'Trample',
                    description: `Po zadaniu obrażeń przewyższających obronę kreatury, reszta punktów ataku 
                    przechodzi na gracza,`,
                    content: []
                },
                {
                    title: 'Reach',
                    description: `Stwory latające nie mogą być blokowane przez kreatury nie latające, chyba, ze mają 
                    'Reach'`, content: []
                },
                {
                    title: 'first strike',
                    description: `Faza ataku jest podzielona na 2 części. Najpierw, w 1 fazie obrażenia są zadawane 
                    przez kreatury z <code>first strikiem</code>, oraz z <code>double strikiem</code>. Podtem
                    następuje 2 faza, podczas której obrażenia zadają kreatury, które przetrwały I fazę.`,
                    content:[]
                },
                {
                    title: 'emblem',
                    description: `
                    'Emblemat', właściwość którą nabywa gracz, jest permanenta i nie da się jej usunąć narazie
                    `,
                    content: []
                },
                {
                    title: 'Flash',
                    description: `Może być zagrany jako instant, w dowolnym momencie tury własnej lub przeciwnika,`,
                    content: []
                },
                {
                    title: 'Fights',
                    description: `Kreatura zadaje obrażenia równe swojemu atakowi wybranemu stworowi, i otrzymuje 
                    obrażenia od stwora, z którym waczy równe jego atakowi`,
                    content: []
                },
                {
                    title: 'Protection from',
                    description: `a color: ochrona przed kolorem. Oznacza, że karta o określonym kolorze nie może
                    zadać obrażeń, zniszczyć, określić obiektu z protekcją jako celu zaklęcia danego koloru,`,
                    content: []
                },
                {
                    title: 'Mutate',
                    description: `Kreatura mutuje z wybraną kreaturą tak, że kładzie się ją na wierzchu lub pod 
                    spód wybranego stwora. Kreatura będąca na wierzchu jest kreaturą pochodną mutacji (atak i 
                        obrona i typy kreatury pochodzą od kreatury pochodnej), natomiast zdolności są 
                        sumą zdolności obu mutujących kreatur,`
                },{
                    title: 'Hexproof',
                    description: `Odporny na czary (czary to nie właściwości permanentów). Nie może być obiekem czarów, 
                    ale może otrzymać obrażenia podczas walki,`,
                    content: []
                },
                {
                    title: 'Exile',
                    description: `Usunąć z gry. Nie trafia do graveyard (grobu), tylko wypada z gry na stałe i nie da 
                    się już skorzystać z takiej karty,`
                },
                {
                    title: 'Escape',
                    description: `Możliwość zagrania karty za 'escape' koszt z grobu,`,
                    content: []
                },
                {
                    title: 'Kicker',
                    description: `Możliwość zagrania karty z dodatkowym kosztem. Posiada wtedy dodatkowe właściwości,`,
                    content: []

                },
                {
                    title: 'Bundle',
                    description: `Kreatury podczas ataku mogą łączyć się w większą jednostkę.... No nie pamiętam 
                    kto rozdziela damage pomiędzi połączone jednostki,`,
                    content: []
                }


            ]
        }
    ]
}

export default function getData(){
    console.log('DOC')
    return doc;
}