import supabase from "./supabase";

export async function buscaTodos(){
    return await supabase.from("produtos").select();
}

export async function busca( id ){
    return await supabase.from("produtos").select().eq("id", id);
}

export async function buscaLista( lista ){
    return await supabase.from("produtos").select().in("id", lista );
}
