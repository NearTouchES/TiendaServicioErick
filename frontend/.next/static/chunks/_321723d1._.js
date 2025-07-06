(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/componentes/PaginaCliente.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaginaCliente)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PaginaCliente({ clientes, setMostrarModalCliente, setClienteSeleccionado }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-gray-800",
                        children: "Gestión de Clientes"
                    }, void 0, false, {
                        fileName: "[project]/componentes/PaginaCliente.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setClienteSeleccionado(null);
                            setMostrarModalCliente(true);
                        },
                        className: "px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition",
                        children: "Nuevo Cliente"
                    }, void 0, false, {
                        fileName: "[project]/componentes/PaginaCliente.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/componentes/PaginaCliente.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            clientes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 text-center",
                children: "No hay clientes registrados."
            }, void 0, false, {
                fileName: "[project]/componentes/PaginaCliente.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full text-sm text-left text-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-100 border-b",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 font-semibold uppercase tracking-wide",
                                        children: "Nombres"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaCliente.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 font-semibold uppercase tracking-wide",
                                        children: "Apellidos"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaCliente.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 font-semibold uppercase tracking-wide",
                                        children: "Tipo de Cliente"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaCliente.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 font-semibold uppercase tracking-wide text-center",
                                        children: "Acciones"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaCliente.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/componentes/PaginaCliente.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/componentes/PaginaCliente.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-200",
                            children: clientes.map((cliente)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: cliente.persona?.nombres
                                        }, void 0, false, {
                                            fileName: "[project]/componentes/PaginaCliente.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: cliente.persona?.apellidos
                                        }, void 0, false, {
                                            fileName: "[project]/componentes/PaginaCliente.tsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: cliente.tipo_cliente
                                        }, void 0, false, {
                                            fileName: "[project]/componentes/PaginaCliente.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setClienteSeleccionado(cliente);
                                                    setMostrarModalCliente(true);
                                                },
                                                className: "px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition",
                                                children: "Editar"
                                            }, void 0, false, {
                                                fileName: "[project]/componentes/PaginaCliente.tsx",
                                                lineNumber: 51,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/componentes/PaginaCliente.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, cliente.id, true, {
                                    fileName: "[project]/componentes/PaginaCliente.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/componentes/PaginaCliente.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/componentes/PaginaCliente.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/componentes/PaginaCliente.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/componentes/PaginaCliente.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = PaginaCliente;
var _c;
__turbopack_context__.k.register(_c, "PaginaCliente");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/componentes/PaginaEmpleado.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaginaEmpleado)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PaginaEmpleado({ empleados, setMostrarModalEmpleado, setEmpleadoSeleccionado }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-gray-800",
                        children: "Gestión de Empleados"
                    }, void 0, false, {
                        fileName: "[project]/componentes/PaginaEmpleado.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setEmpleadoSeleccionado(null);
                            setMostrarModalEmpleado(true);
                        },
                        className: "px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition",
                        children: "Nuevo Empleado"
                    }, void 0, false, {
                        fileName: "[project]/componentes/PaginaEmpleado.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/componentes/PaginaEmpleado.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            empleados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 text-center",
                children: "No hay empleados registrados."
            }, void 0, false, {
                fileName: "[project]/componentes/PaginaEmpleado.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full text-sm text-left text-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-100 border-b",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 font-semibold uppercase tracking-wide",
                                        children: "Nombres"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 font-semibold uppercase tracking-wide",
                                        children: "Apellidos"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 font-semibold uppercase tracking-wide",
                                        children: "Puesto"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 font-semibold uppercase tracking-wide text-center",
                                        children: "Acciones"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/componentes/PaginaEmpleado.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-200",
                            children: empleados.map((empleado)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: empleado.persona?.nombres
                                        }, void 0, false, {
                                            fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: empleado.persona?.apellidos
                                        }, void 0, false, {
                                            fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: empleado.puesto
                                        }, void 0, false, {
                                            fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setEmpleadoSeleccionado(empleado);
                                                    setMostrarModalEmpleado(true);
                                                },
                                                className: "px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition",
                                                children: "Editar"
                                            }, void 0, false, {
                                                fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                                lineNumber: 51,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, empleado.id, true, {
                                    fileName: "[project]/componentes/PaginaEmpleado.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/componentes/PaginaEmpleado.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/componentes/PaginaEmpleado.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/componentes/PaginaEmpleado.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/componentes/PaginaEmpleado.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = PaginaEmpleado;
var _c;
__turbopack_context__.k.register(_c, "PaginaEmpleado");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/componentes/PaginaServicios.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaginaServicios)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PaginaServicios({ productos, agregarAlCarrito, quitarProducto, setMostrarModalProducto, setProductoSeleccionado }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-gray-800",
                        children: "Gestión de Servicios"
                    }, void 0, false, {
                        fileName: "[project]/componentes/PaginaServicios.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setProductoSeleccionado(null);
                            setMostrarModalProducto(true);
                        },
                        className: "px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition",
                        children: "Nuevo Servicio"
                    }, void 0, false, {
                        fileName: "[project]/componentes/PaginaServicios.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/componentes/PaginaServicios.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            productos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 text-center",
                children: "No hay servicios disponibles."
            }, void 0, false, {
                fileName: "[project]/componentes/PaginaServicios.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: productos.map((servicio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-800",
                                children: servicio.nombre
                            }, void 0, false, {
                                fileName: "[project]/componentes/PaginaServicios.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mt-1",
                                children: servicio.descripcion
                            }, void 0, false, {
                                fileName: "[project]/componentes/PaginaServicios.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-bold text-green-600 mt-2",
                                children: [
                                    "S/ ",
                                    servicio.costo.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/componentes/PaginaServicios.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>agregarAlCarrito(servicio),
                                        className: "flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition",
                                        children: "Agregar"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaServicios.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setProductoSeleccionado(servicio);
                                            setMostrarModalProducto(true);
                                        },
                                        className: "flex-1 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition",
                                        children: "Editar"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaServicios.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>quitarProducto(servicio.id),
                                        className: "flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition",
                                        children: "Eliminar"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/PaginaServicios.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/componentes/PaginaServicios.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        ]
                    }, servicio.id, true, {
                        fileName: "[project]/componentes/PaginaServicios.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/componentes/PaginaServicios.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/componentes/PaginaServicios.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = PaginaServicios;
var _c;
__turbopack_context__.k.register(_c, "PaginaServicios");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/componentes/PaginaVentas.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaginaVentas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PaginaVentas() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-extrabold mb-6 text-gray-800",
                children: "Gestión de Ventas"
            }, void 0, false, {
                fileName: "[project]/componentes/PaginaVentas.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-8",
                children: "Bienvenido al panel de gestión de ventas. Aquí podrás visualizar, registrar y administrar las ventas realizadas."
            }, void 0, false, {
                fileName: "[project]/componentes/PaginaVentas.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-xl p-6 hover:shadow-xl transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Registrar Venta"
                            }, void 0, false, {
                                fileName: "[project]/componentes/PaginaVentas.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: "Agrega nuevas ventas realizadas en la tienda."
                            }, void 0, false, {
                                fileName: "[project]/componentes/PaginaVentas.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/componentes/PaginaVentas.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-xl p-6 hover:shadow-xl transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Filtrar por Fecha"
                            }, void 0, false, {
                                fileName: "[project]/componentes/PaginaVentas.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: "Consulta ventas por día, semana o mes."
                            }, void 0, false, {
                                fileName: "[project]/componentes/PaginaVentas.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/componentes/PaginaVentas.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-xl p-6 hover:shadow-xl transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Descargar Reportes"
                            }, void 0, false, {
                                fileName: "[project]/componentes/PaginaVentas.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: "Exporta tus datos de ventas en Excel o PDF."
                            }, void 0, false, {
                                fileName: "[project]/componentes/PaginaVentas.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/componentes/PaginaVentas.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/componentes/PaginaVentas.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/componentes/PaginaVentas.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = PaginaVentas;
var _c;
__turbopack_context__.k.register(_c, "PaginaVentas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/componentes/ModalCliente.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ModalCliente)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ModalCliente({ cliente, cerrar, guardar }) {
    _s();
    const [formulario, setFormulario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tipo_cliente: "",
        id_persona: 0,
        persona: {
            dni: "",
            nombres: "",
            apellidos: "",
            correo_personal: ""
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalCliente.useEffect": ()=>{
            if (cliente) {
                const { id, ...resto } = cliente;
                setFormulario(resto);
            }
        }
    }["ModalCliente.useEffect"], [
        cliente
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        if ([
            "dni",
            "nombres",
            "apellidos",
            "correo_personal"
        ].includes(name)) {
            setFormulario((prev)=>({
                    ...prev,
                    persona: {
                        ...prev.persona,
                        [name]: value
                    }
                }));
        } else {
            setFormulario((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const enviarFormulario = async (e)=>{
        e.preventDefault();
        const datos = cliente ? {
            ...formulario,
            id: cliente.id
        } : formulario;
        await guardar(datos);
        cerrar();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-xl w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4 text-gray-800",
                    children: cliente ? "Editar Cliente" : "Registrar Nuevo Cliente"
                }, void 0, false, {
                    fileName: "[project]/componentes/ModalCliente.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: enviarFormulario,
                    className: "space-y-4",
                    children: [
                        [
                            {
                                id: "dni",
                                label: "DNI",
                                value: formulario.persona.dni
                            },
                            {
                                id: "nombres",
                                label: "Nombres",
                                value: formulario.persona.nombres
                            },
                            {
                                id: "apellidos",
                                label: "Apellidos",
                                value: formulario.persona.apellidos
                            },
                            {
                                id: "correo_personal",
                                label: "Correo",
                                value: formulario.persona.correo_personal
                            }
                        ].map(({ id, label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: id,
                                        className: "block text-sm font-medium text-gray-700",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/ModalCliente.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: id,
                                        name: id,
                                        value: value,
                                        onChange: handleChange,
                                        required: true,
                                        className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/ModalCliente.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/componentes/ModalCliente.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "tipo_cliente",
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Tipo de Cliente"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalCliente.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "tipo_cliente",
                                    name: "tipo_cliente",
                                    value: formulario.tipo_cliente,
                                    onChange: handleChange,
                                    required: true,
                                    className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalCliente.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/componentes/ModalCliente.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: cerrar,
                                    className: "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalCliente.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    children: "Guardar"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalCliente.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/componentes/ModalCliente.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/componentes/ModalCliente.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/componentes/ModalCliente.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/componentes/ModalCliente.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(ModalCliente, "SCVHIGNvlaMK5UxFzoH2c81MdmU=");
_c = ModalCliente;
var _c;
__turbopack_context__.k.register(_c, "ModalCliente");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/componentes/ModalEmpleado.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ModalEmpleado)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ModalEmpleado({ empleado, cerrar, guardar }) {
    _s();
    const [formulario, setFormulario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        puesto: "",
        salario: 0,
        id_persona: 0,
        persona: {
            dni: "",
            nombres: "",
            apellidos: "",
            correo_personal: ""
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalEmpleado.useEffect": ()=>{
            if (empleado) {
                const { id, ...resto } = empleado;
                // Aseguramos que persona no tenga campos undefined
                setFormulario({
                    ...resto,
                    persona: {
                        dni: resto.persona?.dni || "",
                        nombres: resto.persona?.nombres || "",
                        apellidos: resto.persona?.apellidos || "",
                        correo_personal: resto.persona?.correo_personal || ""
                    }
                });
            }
        }
    }["ModalEmpleado.useEffect"], [
        empleado
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        if ([
            "dni",
            "nombres",
            "apellidos",
            "correo_personal"
        ].includes(name)) {
            setFormulario((prev)=>({
                    ...prev,
                    persona: {
                        ...prev.persona,
                        [name]: value
                    }
                }));
        } else if (name === "salario") {
            setFormulario((prev)=>({
                    ...prev,
                    salario: parseFloat(value) || 0
                }));
        } else {
            setFormulario((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const enviarFormulario = async (e)=>{
        e.preventDefault();
        const datos = empleado ? {
            ...formulario,
            id: empleado.id
        } : formulario;
        await guardar(datos);
        cerrar();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-xl w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4 text-gray-800",
                    children: empleado ? "Editar Empleado" : "Registrar Empleado"
                }, void 0, false, {
                    fileName: "[project]/componentes/ModalEmpleado.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: enviarFormulario,
                    className: "space-y-4",
                    children: [
                        [
                            {
                                id: "dni",
                                label: "DNI",
                                value: formulario.persona.dni
                            },
                            {
                                id: "nombres",
                                label: "Nombres",
                                value: formulario.persona.nombres
                            },
                            {
                                id: "apellidos",
                                label: "Apellidos",
                                value: formulario.persona.apellidos
                            },
                            {
                                id: "correo_personal",
                                label: "Correo Personal",
                                value: formulario.persona.correo_personal
                            }
                        ].map(({ id, label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: id,
                                        className: "block text-sm font-medium text-gray-700",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/ModalEmpleado.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: id,
                                        name: id,
                                        value: value,
                                        onChange: handleChange,
                                        required: true,
                                        className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    }, void 0, false, {
                                        fileName: "[project]/componentes/ModalEmpleado.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/componentes/ModalEmpleado.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "puesto",
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Puesto"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalEmpleado.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "puesto",
                                    name: "puesto",
                                    value: formulario.puesto,
                                    onChange: handleChange,
                                    required: true,
                                    className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalEmpleado.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/componentes/ModalEmpleado.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "salario",
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Salario (S/.)"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalEmpleado.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    id: "salario",
                                    name: "salario",
                                    value: formulario.salario,
                                    onChange: handleChange,
                                    min: "0",
                                    step: "0.01",
                                    required: true,
                                    className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalEmpleado.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/componentes/ModalEmpleado.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: cerrar,
                                    className: "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalEmpleado.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                    children: "Guardar"
                                }, void 0, false, {
                                    fileName: "[project]/componentes/ModalEmpleado.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/componentes/ModalEmpleado.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/componentes/ModalEmpleado.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/componentes/ModalEmpleado.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/componentes/ModalEmpleado.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(ModalEmpleado, "BvQfa0m7Ykoydk82CWVU/1Z6fOM=");
_c = ModalEmpleado;
var _c;
__turbopack_context__.k.register(_c, "ModalEmpleado");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/componentes/ModalServicio.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ModalServicio)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ModalServicio({ servicio, cerrar, guardar }) {
    _s();
    const [formulario, setFormulario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nombre: "",
        descripcion: "",
        costo: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalServicio.useEffect": ()=>{
            if (servicio) {
                const { id, ...resto } = servicio;
                setFormulario(resto);
            }
        }
    }["ModalServicio.useEffect"], [
        servicio
    ]);
    const manejarCambio = (e)=>{
        const { name, value } = e.target;
        setFormulario((prev)=>({
                ...prev,
                [name]: name === "costo" ? parseFloat(value) : value
            }));
    };
    const enviarFormulario = ()=>{
        guardar(servicio ? {
            ...formulario,
            id: servicio.id
        } : formulario);
        cerrar();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded shadow w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-4",
                    children: servicio ? "Editar Servicio" : "Nuevo Servicio"
                }, void 0, false, {
                    fileName: "[project]/componentes/ModalServicio.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "nombre",
                    value: formulario.nombre,
                    onChange: manejarCambio,
                    placeholder: "Nombre del servicio",
                    className: "w-full mb-3 p-2 border rounded"
                }, void 0, false, {
                    fileName: "[project]/componentes/ModalServicio.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "descripcion",
                    value: formulario.descripcion,
                    onChange: manejarCambio,
                    placeholder: "Descripción",
                    className: "w-full mb-3 p-2 border rounded"
                }, void 0, false, {
                    fileName: "[project]/componentes/ModalServicio.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    name: "costo",
                    value: formulario.costo,
                    onChange: manejarCambio,
                    placeholder: "Costo",
                    className: "w-full mb-4 p-2 border rounded"
                }, void 0, false, {
                    fileName: "[project]/componentes/ModalServicio.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: cerrar,
                            className: "px-4 py-2 bg-gray-300 rounded hover:bg-gray-400",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/componentes/ModalServicio.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: enviarFormulario,
                            className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                            children: "Guardar"
                        }, void 0, false, {
                            fileName: "[project]/componentes/ModalServicio.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/componentes/ModalServicio.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/componentes/ModalServicio.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/componentes/ModalServicio.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ModalServicio, "uIRqUGSgg29K/V09Az/PTBKZbqk=");
_c = ModalServicio;
var _c;
__turbopack_context__.k.register(_c, "ModalServicio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useMensaje.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMensaje": (()=>useMensaje)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useMensaje() {
    _s();
    const [mensaje, setMensaje] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        text: '',
        type: ''
    });
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mostrarMensaje = (text, type, duracion = 3000)=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setMensaje({
            text,
            type
        });
        timeoutRef.current = setTimeout(()=>{
            setMensaje({
                text: '',
                type: ''
            });
            timeoutRef.current = null;
        }, duracion);
    };
    return {
        mensaje,
        mostrarMensaje
    };
}
_s(useMensaje, "qOvq47TYNKVv9TS2/9kXyRzB9hc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/api/cliente.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "actualizarCliente": (()=>actualizarCliente),
    "crearCliente": (()=>crearCliente),
    "eliminarCliente": (()=>eliminarCliente),
    "getClientes": (()=>getClientes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function getClientes() {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) {
        throw new Error("La URL base de la API no está definida");
    }
    const response = await fetch(`${baseUrl}/clientes`);
    if (!response.ok) {
        throw new Error(`Error al obtener clientes: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}
async function crearCliente(cliente) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) {
        throw new Error("La URL base de la API no está definida");
    }
    const response = await fetch(`${baseUrl}/clientes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });
    if (!response.ok) {
        throw new Error(`Error al crear cliente: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}
async function actualizarCliente(cliente) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) {
        throw new Error("La URL base de la API no está definida");
    }
    const response = await fetch(`${baseUrl}/clientes/${cliente.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });
    if (!response.ok) {
        throw new Error(`Error al actualizar cliente: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}
async function eliminarCliente(id) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) {
        throw new Error("La URL base de la API no está definida");
    }
    const response = await fetch(`${baseUrl}/clientes/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error(`Error al eliminar cliente: ${response.status} ${response.statusText}`);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useCliente.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCliente": (()=>useCliente)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensaje$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMensaje.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/cliente.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useCliente() {
    _s();
    const [clientes, setClientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clienteSeleccionado, setClienteSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mostrarModalCliente, setMostrarModalCliente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { mostrarMensaje } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensaje$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMensaje"])();
    const cargarClientes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCliente.useCallback[cargarClientes]": async ()=>{
            setCargando(true);
            setError(null);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientes"])();
                setClientes(data);
            } catch (err) {
                console.error("Error al cargar clientes:", err);
                setError(err.message || "Error al cargar clientes");
                mostrarMensaje("No se pudieron cargar los clientes", "error");
            } finally{
                setCargando(false);
            }
        }
    }["useCliente.useCallback[cargarClientes]"], [
        mostrarMensaje
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCliente.useEffect": ()=>{
            cargarClientes();
        }
    }["useCliente.useEffect"], [
        cargarClientes
    ]);
    const registrarCliente = async (cliente)=>{
        setCargando(true);
        try {
            const esNuevo = !("id" in cliente);
            const resultado = esNuevo ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crearCliente"])(cliente) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actualizarCliente"])(cliente);
            setClientes((prev)=>esNuevo ? [
                    ...prev,
                    resultado
                ] : prev.map((c)=>c.id === resultado.id ? resultado : c));
            mostrarMensaje(esNuevo ? "Cliente registrado correctamente." : "Cliente actualizado correctamente.", "success");
            setClienteSeleccionado(null);
            setMostrarModalCliente(false);
        } catch (err) {
            console.error("Error al guardar cliente:", err);
            setError(err.message || "Error al guardar cliente");
            mostrarMensaje("No se pudo guardar el cliente", "error");
        } finally{
            setCargando(false);
        }
    };
    const eliminarCliente = async (id)=>{
        setCargando(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eliminarCliente"])(id);
            setClientes((prev)=>prev.filter((c)=>c.id !== id));
            mostrarMensaje("Cliente eliminado correctamente.", "success");
        } catch (err) {
            console.error("Error al eliminar cliente:", err);
            mostrarMensaje("No se pudo eliminar el cliente", "error");
        } finally{
            setCargando(false);
        }
    };
    return {
        clientes,
        clienteSeleccionado,
        mostrarModalCliente,
        setClienteSeleccionado,
        setMostrarModalCliente,
        registrarCliente,
        eliminarCliente,
        cargando,
        error,
        setClientes,
        recargarClientes: cargarClientes
    };
}
_s(useCliente, "KtwoOFGayc11vQ2GU9t8NFSlX94=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensaje$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMensaje"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/api/empleado.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "actualizarEmpleado": (()=>actualizarEmpleado),
    "agregarEmpleado": (()=>agregarEmpleado),
    "eliminarEmpleado": (()=>eliminarEmpleado),
    "obtenerEmpleados": (()=>obtenerEmpleados)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function obtenerEmpleados() {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) {
        throw new Error("La URL base de la API no está definida");
    }
    const response = await fetch(`${baseUrl}/empleados`);
    if (!response.ok) {
        throw new Error(`Error al obtener empleados: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}
async function agregarEmpleado(empleado) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) {
        throw new Error("La URL base de la API no está definida");
    }
    const response = await fetch(`${baseUrl}/empleados`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(empleado)
    });
    if (!response.ok) {
        throw new Error(`Error al agregar empleado: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}
async function actualizarEmpleado(empleado) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) {
        throw new Error("La URL base de la API no está definida");
    }
    const response = await fetch(`${baseUrl}/empleados/${empleado.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(empleado)
    });
    if (!response.ok) {
        throw new Error(`Error al actualizar empleado: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}
async function eliminarEmpleado(id) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) {
        throw new Error("La URL base de la API no está definida");
    }
    const response = await fetch(`${baseUrl}/empleados/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error(`Error al eliminar empleado: ${response.status} ${response.statusText}`);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useEmpleado.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useEmpleado": (()=>useEmpleado)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensaje$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMensaje.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$empleado$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/empleado.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useEmpleado() {
    _s();
    const [empleados, setEmpleados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [empleadoSeleccionado, setEmpleadoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mostrarModalEmpleado, setMostrarModalEmpleado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { mostrarMensaje } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensaje$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMensaje"])();
    const cargarEmpleados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEmpleado.useCallback[cargarEmpleados]": async ()=>{
            setCargando(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$empleado$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["obtenerEmpleados"])();
                setEmpleados(data);
            } catch (error) {
                console.error("Error al obtener empleados:", error);
                mostrarMensaje("No se pudieron cargar los empleados.", "error");
            } finally{
                setCargando(false);
            }
        }
    }["useEmpleado.useCallback[cargarEmpleados]"], [
        mostrarMensaje
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmpleado.useEffect": ()=>{
            cargarEmpleados();
        }
    }["useEmpleado.useEffect"], [
        cargarEmpleados
    ]);
    const guardarEmpleado = async (empleado)=>{
        setCargando(true);
        const esNuevo = !("id" in empleado);
        try {
            const empleadoGuardado = esNuevo ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$empleado$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agregarEmpleado"])(empleado) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$empleado$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actualizarEmpleado"])(empleado);
            setEmpleados((prev)=>esNuevo ? [
                    ...prev,
                    empleadoGuardado
                ] : prev.map((e)=>e.id === empleadoGuardado.id ? empleadoGuardado : e));
            mostrarMensaje(esNuevo ? "Empleado registrado exitosamente!" : "Empleado actualizado exitosamente!", "success");
            setEmpleadoSeleccionado(null);
            setMostrarModalEmpleado(false);
        } catch (error) {
            console.error("Error al guardar empleado:", error);
            mostrarMensaje("No se pudo guardar el empleado.", "error");
        } finally{
            setCargando(false);
        }
    };
    const eliminarEmpleado = async (id)=>{
        setCargando(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$empleado$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eliminarEmpleado"])(id);
            setEmpleados((prev)=>prev.filter((e)=>e.id !== id));
            mostrarMensaje("Empleado eliminado exitosamente!", "success");
        } catch (error) {
            console.error("Error al eliminar empleado:", error);
            mostrarMensaje("No se pudo eliminar el empleado.", "error");
        } finally{
            setCargando(false);
        }
    };
    return {
        empleados,
        empleadoSeleccionado,
        mostrarModalEmpleado,
        setEmpleadoSeleccionado,
        setMostrarModalEmpleado,
        guardarEmpleado,
        eliminarEmpleado,
        cargando,
        recargar: cargarEmpleados,
        setEmpleados
    };
}
_s(useEmpleado, "jRPXbUeDLi6I+a1T477j0rhcRIY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensaje$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMensaje"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/api/servicios.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "actualizarServicio": (()=>actualizarServicio),
    "crearServicio": (()=>crearServicio),
    "eliminarServicio": (()=>eliminarServicio),
    "getServicios": (()=>getServicios)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function getServicios() {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) throw new Error("La URL base de la API no está definida");
    const response = await fetch(`${baseUrl}/servicios`);
    if (!response.ok) {
        throw new Error(`Error al obtener servicios: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}
async function crearServicio(servicio) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) throw new Error("La URL base de la API no está definida");
    const response = await fetch(`${baseUrl}/servicios`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(servicio)
    });
    if (!response.ok) {
        throw new Error(`Error al crear servicio: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}
async function actualizarServicio(servicio) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) throw new Error("La URL base de la API no está definida");
    const response = await fetch(`${baseUrl}/servicios/${servicio.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(servicio)
    });
    if (!response.ok) {
        throw new Error(`Error al actualizar servicio: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}
async function eliminarServicio(id) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_URL_BASE_API;
    if (!baseUrl) throw new Error("La URL base de la API no está definida");
    const response = await fetch(`${baseUrl}/servicios/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error(`Error al eliminar servicio: ${response.status} ${response.statusText}`);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useServicios.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useServicios": (()=>useServicios)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensaje$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMensaje.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$servicios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/servicios.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useServicios() {
    _s();
    const [servicios, setServicios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [servicioSeleccionado, setServicioSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mostrarModalServicio, setMostrarModalServicio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { mostrarMensaje } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensaje$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMensaje"])();
    const cargarServicios = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useServicios.useCallback[cargarServicios]": async ()=>{
            setCargando(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$servicios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServicios"])();
                setServicios(data);
            } catch (error) {
                console.error("Error al cargar servicios:", error);
                mostrarMensaje("No se pudieron cargar los servicios.", "error");
            } finally{
                setCargando(false);
            }
        }
    }["useServicios.useCallback[cargarServicios]"], [
        mostrarMensaje
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useServicios.useEffect": ()=>{
            cargarServicios();
        }
    }["useServicios.useEffect"], [
        cargarServicios
    ]);
    const registrarServicio = async (servicio)=>{
        setCargando(true);
        const esNuevo = !("id" in servicio);
        try {
            const resultado = esNuevo ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$servicios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crearServicio"])(servicio) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$servicios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actualizarServicio"])(servicio);
            setServicios((prev)=>esNuevo ? [
                    ...prev,
                    resultado
                ] : prev.map((s)=>s.id === resultado.id ? resultado : s));
            mostrarMensaje(esNuevo ? "Servicio agregado correctamente." : "Servicio actualizado correctamente.", "success");
            setMostrarModalServicio(false);
            setServicioSeleccionado(null);
        } catch (error) {
            console.error("Error al guardar servicio:", error);
            mostrarMensaje("No se pudo guardar el servicio.", "error");
        } finally{
            setCargando(false);
        }
    };
    const eliminarServicioById = async (id)=>{
        setCargando(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$servicios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eliminarServicio"])(id);
            setServicios((prev)=>prev.filter((s)=>s.id !== id));
            mostrarMensaje("Servicio eliminado correctamente.", "success");
        } catch (error) {
            console.error("Error al eliminar servicio:", error);
            mostrarMensaje("No se pudo eliminar el servicio.", "error");
        } finally{
            setCargando(false);
        }
    };
    return {
        servicios,
        servicioSeleccionado,
        mostrarModalServicio,
        setServicioSeleccionado,
        setMostrarModalServicio,
        registrarServicio,
        eliminarServicio: eliminarServicioById,
        recargar: cargarServicios,
        cargando,
        setServicios
    };
}
_s(useServicios, "Z8/R/wH83q2It2MPN2FgH1APlqE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensaje$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMensaje"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TiendaServicioDashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$PaginaCliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/PaginaCliente.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$PaginaEmpleado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/PaginaEmpleado.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$PaginaServicios$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/PaginaServicios.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$PaginaVentas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/PaginaVentas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$ModalCliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/ModalCliente.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$ModalEmpleado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/ModalEmpleado.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$ModalServicio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/ModalServicio.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useCliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEmpleado$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEmpleado.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useServicios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useServicios.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function TiendaServicioDashboard() {
    _s();
    const [pagina, setPagina] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("clientes");
    // Hooks de cada entidad
    const clienteHook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCliente"])();
    const empleadoHook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEmpleado$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmpleado"])();
    const servicioHook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useServicios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServicios"])();
    // Guardar cliente
    const guardarCliente = async (cliente)=>{
        await clienteHook.registrarCliente(cliente);
        clienteHook.setMostrarModalCliente(false);
    };
    // Guardar empleado
    const guardarEmpleado = async (empleado)=>{
        await empleadoHook.guardarEmpleado(empleado);
        empleadoHook.setMostrarModalEmpleado(false);
    };
    // Guardar servicio
    const guardarServicio = async (servicio)=>{
        if ("id" in servicio) {
            await servicioHook.actualizarServicio(servicio);
        } else {
            await servicioHook.agregarServicio(servicio);
        }
        servicioHook.setMostrarServicioModal(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 text-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-gray-800 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-around",
                    children: [
                        "clientes",
                        "empleados",
                        "servicios",
                        "ventas"
                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPagina(p),
                            className: `px-4 py-2 rounded-md text-white font-semibold ${pagina === p ? "bg-blue-600" : "hover:bg-gray-600"}`,
                            children: p.charAt(0).toUpperCase() + p.slice(1)
                        }, p, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "p-6",
                children: [
                    pagina === "clientes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$PaginaCliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        clientes: clienteHook.clientes,
                        setMostrarModalCliente: clienteHook.setMostrarModalCliente,
                        setClienteSeleccionado: clienteHook.setClienteSeleccionado
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    pagina === "empleados" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$PaginaEmpleado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        empleados: empleadoHook.empleados,
                        setMostrarModalEmpleado: empleadoHook.setMostrarModalEmpleado,
                        setEmpleadoSeleccionado: empleadoHook.setEmpleadoSeleccionado
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    pagina === "servicios" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$PaginaServicios$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        productos: servicioHook.servicios,
                        agregarAlCarrito: ()=>{},
                        quitarProducto: servicioHook.eliminarServicio,
                        setMostrarModalProducto: servicioHook.setMostrarServicioModal,
                        setProductoSeleccionado: servicioHook.setServicioSeleccionado
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    pagina === "ventas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$PaginaVentas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            clienteHook.mostrarModalCliente && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$ModalCliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cliente: clienteHook.clienteSeleccionado,
                cerrar: ()=>clienteHook.setMostrarModalCliente(false),
                guardar: guardarCliente
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            empleadoHook.mostrarModalEmpleado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$ModalEmpleado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                empleado: empleadoHook.empleadoSeleccionado,
                cerrar: ()=>empleadoHook.setMostrarModalEmpleado(false),
                guardar: guardarEmpleado
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            servicioHook.mostrarModalServicio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$ModalServicio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                servicio: servicioHook.servicioSeleccionado,
                cerrar: ()=>servicioHook.setMostrarServicioModal(false),
                guardar: guardarServicio
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(TiendaServicioDashboard, "5D+4xJzm520X1nnN9QB2F1/S2nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCliente"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEmpleado$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmpleado"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useServicios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServicios"]
    ];
});
_c = TiendaServicioDashboard;
var _c;
__turbopack_context__.k.register(_c, "TiendaServicioDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_321723d1._.js.map