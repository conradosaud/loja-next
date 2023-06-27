const { default: supabase } = require("./supabase");

export async function insere( nome, email, senha ){
    return await supabase.from("usuarios").insert({ nome: nome, email: email, senha: senha });
}

export async function autentica( email, senha ){
    return await supabase.from("usuarios").select().match({email: email, senha: senha});
}