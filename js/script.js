const games=[
    'Monster.Hunter.Rise.Sunbreak-EMPRESS',
'Dragon.Ball.FighterZ.Android.21-EMPRESS',
'Maneater-EMPRESS',
'Dying.Light.2.Crack.Enhancement-EMPRESS',
'Dying.Light.2.Stay.Human-EMPRESS',
'Marvels.Guardians.of.the.Galaxy.Crackfix-EMPRESS',
'Marvels.Guardians.of.the.Galaxy-EMPRESS',
'Evil.Genius.2.World.Domination-EMPRESS',
'Far.Cry.6-EMPRESS',
'Deathloop.Crackfix-EMPRESS',
'Deathloop-EMPRESS',
'Tom.Clancys.Ghost.Recon.Wildlands.Complete.Edition.Crackfix-EMPRESS',
'Red.Dead.Redemption.2.Build.1436.28-EMPRESS+Mr_Goldberg',
'Tom.Clancys.Ghost.Reacon.Wildlands.Complete.Editon-EMPRESS',
'Watchs.Dogs.Legion-EMPRESS',
'Forza.Horizon.5.PROPER-EMPRESS',
'Doom.Eternal.The.Ancient.Gods-EMPRESS',
'Total.War.WARHAMMER.II.The.Silence.and.The.Fury-EMPRESS',
'Star.Wars.Battlefront.II.Celebration.Edition.READNFO-EMPRESS',
'Resident.Evil.Village.Animation.Fix-EMPRESS',
'Resident.Evil.Village-EMPRESS',
'Yakuza.Like.A.Dragon-EMPRESS',
'Left.Alive-EMPRESS',
'Life.is.Strange.2.Complete.Edition.Crackfix.READNFO-EMPRESS',
'Life.is.Strange.2.Complete.Edition-EMPRESS',
'Planet.Coaster.Complete.Edition-EMPRESS',
'Jurassic.World.Evolution.Complete.Edition-EMPRESS',
'Crash.Bandicoot.4-EMPRESS',
'Assassins.Creed.Valhalla.Repack-EMPRESS',
'Forza.Horizon.4.PROPER-EMPRESS',
'Immortals.Fenyx.Rising.Crackfix.V2-EMPRESS',
'Just.Cause.4.Complete.Edition.READNFO-EMPRESS',
'Immortals.Fenyx.Rising-EMPRESS'
]

const nfoLinks=[
    'https://nfomation.net/info/1676962149.EMPRESS.nfo',
'https://nfomation.net/info/1676962178.EMPRESS.nfo',
'https://nfomation.net/info/1676962191.EMPRESS.nfo',
'https://nfomation.net/info/1676962202.EMPRESS.nfo',
'https://nfomation.net/info/1676962212.EMPRESS.nfo',
'https://nfomation.net/info/1676962222.EMPRESS.nfo',
'https://nfomation.net/info/1676962235.EMPRESS.nfo',
'https://nfomation.net/info/1676962247.EMPRESS.nfo',
'https://nfomation.net/info/1676962257.EMPRESS.nfo',
'https://nfomation.net/info/1676962269.EMPRESS.nfo',
'https://nfomation.net/info/1676962281.EMPRESS.nfo',
'https://nfomation.net/info/1676962292.EMPRESS.nfo',
'https://nfomation.net/info/1676962302.EMPRESS.nfo',
'https://nfomation.net/info/1676962312.EMPRESS.nfo',
'https://nfomation.net/info/1676962344.EMPRESS.nfo',
'https://nfomation.net/info/1676962355.EMPRESS.nfo',
'https://nfomation.net/info/1676962365.EMPRESS.nfo',
'https://nfomation.net/info/1676962376.EMPRESS.nfo',
'https://nfomation.net/info/1676962388.EMPRESS.nfo',
'https://nfomation.net/info/1676962451.EMPRESS.nfo',
'https://nfomation.net/info/1676962462.EMPRESS.nfo',
'https://nfomation.net/info/1676962473.EMPRESS.nfo',
'https://nfomation.net/info/1676962482.EMPRESS.nfo',
'https://nfomation.net/info/1676962492.EMPRESS.nfo',
'https://nfomation.net/info/1676962501.EMPRESS.nfo',
'https://nfomation.net/info/1676962512.EMPRESS.nfo',
'https://nfomation.net/info/1676962522.EMPRESS.nfo',
'https://nfomation.net/info/1676962533.EMPRESS.nfo',
'https://nfomation.net/info/1676962543.EMPRESS.nfo',
'https://nfomation.net/info/1676962553.EMPRESS.nfo',
'https://nfomation.net/info/1676962563.EMPRESS.nfo',
'https://nfomation.net/info/1676962573.EMPRESS.nfo',
'https://nfomation.net/info/1676962582.EMPRESS.nfo'
];

const container=document.querySelector('.container');

for (i=0;i<=games.length-1;i++){
    const link=document.createElement('a');
    link.setAttribute('href',nfoLinks[i]);
    link.setAttribute('target','_blank');
    link.setAttribute('style','text-decoration: none');
    if (games.length-i<=9) link.textContent=`0${games.length-i} ${games[i]}`;
    else link.textContent=`${games.length-i} ${games[i]}`;
    container.appendChild(link);
}