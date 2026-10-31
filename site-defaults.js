/* Spacak SMP: východiskový obsah stránky.
   Tento súbor sa nemení. Zmeny z admin panelu sa ukladajú do site-config.js a prekrývajú tieto hodnoty.
   Objekty sa spájajú po kľúčoch, polia (zoznamy) sa nahrádzajú celé. */
(function () {
  'use strict';

  var isObj = function (v) { return v && typeof v === 'object' && !Array.isArray(v); };
  function merge(base, over) {
    if (!isObj(base) || !isObj(over)) return over === undefined ? base : over;
    var out = {};
    Object.keys(base).forEach(function (k) { out[k] = k in over ? merge(base[k], over[k]) : JSON.parse(JSON.stringify(base[k])); });
    Object.keys(over).forEach(function (k) { if (!(k in base)) out[k] = over[k]; });
    return out;
  }

  var T = function (l, v) { return { l: l, v: v }; };

  window.SITE_DEFAULTS = {
    general: {
      ip: '176.9.21.120:25739',
      discord: '',
      subtitle: 'Session 3: open pokračovanie nášho serveru',
      subtitleOpened: 'Vitaj späť na Spacak SMP!',
      description: 'Spacak SMP – Session 3. Open pokračovanie nášho serveru. Štart {den} o {cas}.',
      mc: '1.21.1',
      loader: 'NeoForge',
      maxPlayers: 'až 20'
    },
    server: {
      start: '2026-11-01T17:00:00+01:00',
      forceOpen: false
    },
    theme: 'auto',
    features: {
      tabs: { mapa: true, navod: true, questy: true, modpack: true, eventy: true, pravidla: true, clenovia: true },
      countdown: true,
      navCountdown: true,
      livePill: true,
      statusSection: true,
      playerList: true,
      discordButton: true,
      themeButton: true,
      easterEgg: true,
      footerOwners: true
    },
    banner: { on: false, text: 'Dnes o 20:00 prebehne krátka údržba servera.', kind: 'info' },
    map: {
      enabled: true,
      url: 'http://176.9.21.120:25901',
      offTitle: 'Mapa je dočasne vypnutá',
      offText: 'Vrátime ju, keď bude server pripravený.'
    },
    guide: {
      steps: [
        { t: 'Nainštaluj Minecraft {mc} s NeoForge', d: 'Server beží na Minecraft Java Edition {mc} a NeoForge 21.1. Potrebuješ originálny Minecraft účet.' },
        { t: 'Stiahni modpack', d: 'Balík módov nájdeš v záložke [Modpack](#modpack). Pridaj ho do svojho launchera a hre pridel aspoň 6 GB RAM.' },
        { t: 'Pridaj server', d: 'V hre otvor Multiplayer, klikni na Add Server a do poľa Server Address vlož adresu.' },
        { t: 'Pripoj sa a hraj', d: 'Server sa otvára {den} o {cas}. Pred tým sa k nemu pripojiť nedá.' }
      ],
      openedText: 'Server je otvorený, môžeš sa pripojiť.',
      closedIpText: 'Odhalí sa pri štarte',
      cardNote: 'Whitelist nemáme, stačí adresa a modpack.',
      commands: [
        { c: '/sethome', d: 'Uloží tvoje aktuálne miesto ako domov.' },
        { c: '/home', d: 'Teleportuje ťa domov.' },
        { c: '/delhome', d: 'Zmaže uložený domov.' },
        { c: '/back', d: 'Vráti ťa na predošlé miesto.' },
        { c: '/tpa <hráč>', d: 'Požiada hráča o teleport k nemu.' },
        { c: '/tpaccept', d: 'Prijme žiadosť o teleport.' },
        { c: '/tpdeny', d: 'Odmietne žiadosť o teleport.' },
        { c: '/warp <meno>', d: 'Teleportuje ťa na verejné miesto servera.' }
      ],
      faq: [
        { q: 'Prečo sa nemôžem pripojiť?', a: 'Skontroluj, či hráš na Minecrafte {mc} s NeoForge 21.1 a máš nainštalovaný modpack. Pripojiť sa dá až od štartu servera {den} o {cas}.' },
        { q: 'Môžem hrať na cracknutom klientovi?', a: 'Nie. Server vyžaduje originálny Minecraft účet.' },
        { q: 'Čo sa stane, keď zomriem?', a: 'Tvoje veci ostanú v hrobe na mieste smrti. Zapamätaj si súradnice a vráť sa pre ne čo najskôr.' },
        { q: 'Ako sa rýchlo presúvam po svete?', a: 'Postav si waystone a odomkni cestovanie medzi nimi. Na ďalšie presuny použi /home a /tpa.' },
        { q: 'Môžem používať shadery a minimapu?', a: 'Áno, kozmetické úpravy sú v poriadku. Cheaty ako X-ray alebo fly sú zakázané, pozri záložku [Pravidlá](#pravidla).' },
        { q: 'Koľko hráčov sa zmestí na server?', a: 'Naraz {hraci}.' },
        { q: 'Čo mám robiť, keď nájdem bug?', a: 'Nezneužívaj ho a napíš helperovi alebo na Discord. Opravíme ho čo najskôr.' },
        { q: 'Kde nájdem mapu sveta?', a: 'V záložke [Mapa](#mapa). Beží cez BlueMap a ukazuje stavby aj hráčov.' }
      ]
    },
    modpack: {
      version: '1.0.0',
      url: '',
      locked: false,
      file: '',
      mods: ['Create', 'Create: Aeronautics', 'Ars Nouveau', 'Aether', 'Twilight Forest', 'Biomes O\' Plenty', 'Regions Unexplored', 'Refined Storage', 'Sophisticated Backpacks',
        'Sophisticated Storage', 'Waystones', 'Farmer\'s Delight', 'Alex\'s Mobs', 'Quark', 'Supplementaries', 'Powah', 'Steam \'n\' Rails', 'FTB Quests', 'Artifacts', 'Relics']
    },
    events: [
      {
        id: 'halloween', on: true, scene: 'halloween', title: 'Halloween Night', date: '2027-10-30T18:00:00+02:00',
        text: 'Strašidelná noc na Spacak SMP. Spawn sa zmení na prekliate mestečko, po mape sa schovávajú tekvice a kto prežije do rána, dostane odmenu.',
        chips: ['Strašidelný spawn', 'Tekvicový hon', 'Kostýmy'], color: '#ff8a1f'
      },
      {
        id: 'zima', on: true, scene: 'winter', title: 'Zimný festival', date: '2026-12-19T18:00:00+01:00',
        text: 'Sneh na spawne, ľadové stavby a súťaž o najkrajšiu vianočnú dedinku. Zahrej sa pri ohni a ukáž, čo vieš postaviť.',
        chips: ['Ľadová aréna', 'Snehové bitky', 'Vianočná dedinka'], color: '#8fd3ff'
      }
    ],
    rules: {
      mc: [
        { t: 'Žiadny griefing', d: 'Nič nelámeš, nekradneš ani nevypaľuješ z cudzích stavieb a truhlíc. Čo nie je tvoje, nechaj na pokoji.' },
        { t: 'Žiadne cheaty', d: 'X-ray, fly, kill aura a podobné hacknuté klienty sú zakázané. Ak si nie si istý s modom, spýtaj sa helpera.' },
        { t: 'Žiadne dupe a zneužívanie bugov', d: 'Duplikovanie itemov a zneužívanie chýb je zakázané. Ak nájdeš bug, nahlás ho.' },
        { t: 'PvP len so súhlasom', d: 'Hráča môžeš zabiť len vtedy, keď s tým súhlasí. Spawn kill a obťažovanie nováčikov sú zakázané.' },
        { t: 'Rešpektuj základne', d: 'Stavaj aspoň 100 blokov od cudzej základne a nezaberaj pozemky, na ktorých už niekto stavia.' },
        { t: 'Nelaguj server', d: 'Veľké farmy, redstone hodiny a stovky entít stav tak, aby server nezaťažovali. Helper môže stroj vypnúť.' },
        { t: 'Slušný chat', d: 'V hernom chate žiadne urážky, spam ani reklama.' }
      ],
      dc: [
        { t: 'Buď slušný', d: 'Žiadne urážky, vyhrážky, rasizmus ani nenávistné prejavy.' },
        { t: 'Žiadny spam', d: 'Nezahlcuj kanály, nepíš všetko veľkými písmenami a bezdôvodne nepinguj ownerov, helperov ani @everyone.' },
        { t: 'Správny kanál', d: 'Píš do kanála, ktorý patrí k tvojej téme.' },
        { t: 'Žiadna reklama', d: 'Bez pozvánok na iné servery, odkazov na cudzie projekty a predaja.' },
        { t: 'Žiadny nevhodný obsah', d: 'NSFW, násilie a šokujúce obrázky sú zakázané.' },
        { t: 'Súkromie', d: 'Nezverejňuj cudzie osobné údaje, fotky ani súkromné správy bez súhlasu.' },
        { t: 'Poslúchaj tím', d: 'Pokyny ownerov a helperov platia. Nesúhlasíš? Napíš im súkromne, nie do chatu.' }
      ]
    },
    team: [
      { n: 'Ferenzhy', r: 'owner' }, { n: 'Spacesov_MC', r: 'owner2' }, { n: 'People1Mc', r: 'helper' },
      { n: 'Between', r: 'clen' }, { n: 'MatuskoPlays', r: 'clen' }, { n: 'twowetsocks', r: 'clen' }, { n: 'Athummer', r: 'clen' },
      { n: 'LeuskoR', r: 'clen' }, { n: 'Vietnamska_pivnica', r: 'clen' }, { n: 'hellcat_driver', r: 'clen' }
    ],
    texts: {
      tab_home: T('Záložka: Domov', 'Domov'),
      tab_mapa: T('Záložka: Mapa (aj nadpis)', 'Mapa'),
      tab_navod: T('Záložka: Návod (aj nadpis)', 'Návod'),
      tab_questy: T('Záložka: Questy (aj nadpis)', 'Questy'),
      tab_modpack: T('Záložka: Modpack (aj nadpis)', 'Modpack'),
      tab_eventy: T('Záložka: Eventy (aj nadpis)', 'Eventy'),
      tab_pravidla: T('Záložka: Pravidlá (aj nadpis)', 'Pravidlá'),
      tab_clenovia: T('Záložka: Členovia (aj nadpis)', 'Členovia'),
      sub_mapa: T('Podnadpis: Mapa', 'Celý svet Spacak SMP na jednom mieste.'),
      sub_navod: T('Podnadpis: Návod', 'Pripojenie, príkazy a odpovede na bežné otázky.'),
      sub_questy: T('Podnadpis: Questy', 'Celá questová kniha servera. Klikni na quest a uvidíš úlohy aj odmeny.'),
      sub_modpack: T('Podnadpis: Modpack', 'Balík módov pre Session 3.'),
      sub_eventy: T('Podnadpis: Eventy', 'Čo sa na Spacak SMP chystá.'),
      sub_pravidla: T('Podnadpis: Pravidlá', 'Aby sa tu všetci dobre bavili.'),
      sub_clenovia: T('Podnadpis: Členovia', 'Tím a hráči Spacak SMP.'),
      cd_title: T('Domov: nadpis odpočtu', 'Server sa otvára o'),
      open_title: T('Domov: nadpis po otvorení', 'Server je otvorený'),
      st_title: T('Domov: Stav servera', 'Stav servera'),
      st_players: T('Domov: Kto práve hrá', 'Kto práve hrá'),
      map_h: T('Mapa: nadpis', 'Mapa sveta'),
      map_upd: T('Mapa: podtitul', 'Živá mapa cez BlueMap'),
      map_hint: T('Mapa: poznámka pod mapou', 'Mapu môžeš otáčať, priblížiť a prepínať medzi 3D a 2D pohľadom. Vidíš na nej stavby, terén aj hráčov online.'),
      nv_h: T('Návod: nadpis', 'Ako sa pripojiť'),
      nv_upd: T('Návod: podtitul', 'Zaberie to pár minút'),
      card_h: T('Návod: nadpis karty s IP', 'Adresa servera'),
      cmd_h: T('Návod: nadpis príkazov', 'Príkazy'),
      faq_h: T('Návod: nadpis otázok', 'Časté otázky'),
      mp_h: T('Modpack: nadpis', 'Spacak SMP Modpack'),
      mp_lead: T('Modpack: úvodný text', 'Hotový balík módov pre Session 3. Keď bude pripravený, stiahneš ho priamo tu.'),
      mp_chips_h: T('Modpack: nadpis módov', 'Čo v ňom nájdeš'),
      mp_note: T('Modpack: poznámka pod módmi', 'A ďalšie desiatky módov. Zoznam sa môže pred štartom ešte zmeniť.'),
      ev_h: T('Eventy: nadpis', 'Najbližšie eventy'),
      ev_upd: T('Eventy: podtitul', 'Dátumy sa ešte môžu zmeniť'),
      rl_h: T('Pravidlá: nadpis', 'Pravidlá servera'),
      rl_upd: T('Pravidlá: podtitul', 'Platia pre každého, bez výnimiek'),
      rl_mc: T('Pravidlá: nadpis Minecraft', 'Minecraft server'),
      rl_dc: T('Pravidlá: nadpis Discord', 'Discord'),
      rl_end: T('Pravidlá: text pod pravidlami', 'Za porušenie pravidiel hrozí varovanie, mute alebo ban, podľa závažnosti. Rozhodnutia ownerov a helperov sú konečné.'),
      rl_btn: T('Pravidlá: tlačidlo', 'Prečítal som si pravidlá'),
      cl_h: T('Členovia: nadpis', 'Tím Spacak SMP'),
      cl_upd: T('Členovia: podtitul', 'Klikni na meno a skopíruješ nick'),
      g_vedenie: T('Členovia: skupina Vedenie', 'Vedenie'),
      g_helper: T('Členovia: skupina Helper', 'Helper'),
      g_hraci: T('Členovia: skupina Hráči', 'Hráči'),
      foot_host1: T('Pätička: hosting (riadok 1)', 'Hosting zabezpečuje'),
      foot_host2: T('Pätička: hosting (riadok 2)', 'Minecraft-Hosting.eu'),
      foot_legal: T('Pätička: právna poznámka', 'Spacak SMP nie je spojený s Mojang ani Microsoft.')
    }
  };

  window.siteMerge = merge;
  window.siteConfig = function () { return merge(window.SITE_DEFAULTS, window.SITE_CONFIG || {}); };
})();
