'use client'
import { useContext, useEffect } from "react";
import { UsuarioContext } from "@/context/UsuarioContext";
import { redirect } from "next/navigation";

export default function Logout(){

    const [ usuario, alteraUsuario ] = useContext(UsuarioContext)
    
    useEffect(()=>{
        alteraUsuario(null);
        alert("Você foi desconectado")
        redirect('/')
    }, [])

}