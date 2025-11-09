---
title: Guía de la Herramienta Aurora Toolset
description: Una referencia para la herramienta que permite a los jugadores crear sus propios mundos y módulos de Neverwinter Nights.
---

El **Aurora Toolset** es el corazón de la longevidad de *Neverwinter Nights*.  
Es el entorno de desarrollo que BioWare proporcionó con el juego, permitiendo a cualquier jugador convertirse en creador de contenido.  
El Toolset es una herramienta **WYSIWYG** (*What You See Is What You Get*) para el diseño de módulos.

---

## 🧩 Componentes Clave del Toolset

El Toolset se divide en varios editores principales, todos interconectados:

### 1. Editor de Áreas (Area Editor)

Es el espacio de diseño principal. Permite:

- **Pintar Terreno:** Usar pinceles para definir el tipo de suelo (hierba, piedra, agua).  
- **Colocar Objetos:** Añadir árboles, rocas, edificios y elementos ambientales.  
- **Definir Iluminación:** Ajustar la hora del día, el color de la luz ambiental y las fuentes dinámicas.  
- **Geometría:** Utilizar estructuras prefabricadas (castillos, ruinas, templos) para construir escenarios complejos.

---

### 2. Editor de Diálogos (Dialog Editor)

Permite construir árboles de conversación complejos. Cada nodo de diálogo incluye:

- **Línea del Jugador:** Opciones que el personaje del jugador puede decir.  
- **Línea del PNJ:** La respuesta del Personaje No Jugador.  
- **Scripts (On-Enter / On-Exit):** Acciones ejecutadas al entrar o salir del nodo (misiones, reputación, cambios de estado).

---

### 3. Editor de Scripts (Script Editor)

NWN utiliza un lenguaje de programación simple llamado **NWScript**, similar a C.

- **Funciones Predefinidas:** Miles de funciones específicas, como `ActionAttack()`, `SetLocalInt()` o `SpeakString()`.  
- **Eventos:** Los scripts se asocian a eventos del juego (por ejemplo, “Al abrir un cofre”, “Al entrar en un área”).  
- **Compilación:** Los scripts deben compilarse dentro del Toolset antes de usarse en el módulo.

---

## 💡 Consejos para Creadores

- **Modularidad:** Divide la historia en módulos o capítulos pequeños para facilitar el desarrollo.  
- **Uso de Variables:** Usa variables locales (`LocalInt`, `LocalString`) para registrar el estado de misiones o diálogos.  
- **Pruebas Constantes:** Ejecuta el módulo con frecuencia dentro del Toolset para verificar scripts y comportamiento de PNJs.
