// REST integration seam: replace these local reads with fetch calls when the API is ready.
import {characters,clans,villages,teams,abilities,beasts,akatsuki,kara} from './data.js';
const collections={characters,clans,villages,teams,abilities,beasts,akatsuki,kara};
export const archive={list:(type)=>collections[type]??[],get:(type,id)=>collections[type]?.find(item=>item.id===id),search:(query)=>Object.entries(collections).flatMap(([type,items])=>items.filter(item=>item.name.toLowerCase().includes(query.toLowerCase())).map(item=>({...item,type})))};
