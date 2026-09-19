export type Project = {
  id: number;
  key: string;
  link?: string;
};

export const projects: readonly Project[] = [
  {id: 10, key: 'itemTen', link: 'https://github.com/eaangrino/kinewall-video-wallpaper-android'},
  {id: 9, key: 'itemNine', link: 'https://github.com/eaangrino/kinewall-video-wallpaper'},
  {id: 8, key: 'itemEight', link: 'https://github.com/eaangrino/mcp-shell-sudo'},
  {id: 7, key: 'itemSeven', link: 'https://github.com/eaangrino/obs-voice-isolator'},
  {id: 6, key: 'itemSix', link: 'https://github.com/eaangrino/orqent'},
  {id: 5, key: 'itemFive', link: 'https://github.com/eaangrino/multi-whatsapp'},
  {id: 4, key: 'itemFour', link: 'https://github.com/eaangrino/mine-hammers'},
  {id: 3, key: 'itemThree', link: 'https://github.com/eaangrino/mine-excavators'},
  {id: 2, key: 'itemTwo'},
  {id: 1, key: 'itemOne', link: 'https://arteslafaux.github.io'},
];
