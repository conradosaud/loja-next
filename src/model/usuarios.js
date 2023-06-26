const { default: supabase } = require("./supabase");

async function insere( email, senha ){
    resposta = await supabase.from("usuarios").insert({ email: email, senha: senha });
    return resposta
}

async function autentica( email, senha ){
    resposta = await supabase.from("usuarios").select().eq('email', email, 'senha', senha);
    return resposta
}