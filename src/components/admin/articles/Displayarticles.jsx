import {Link} from "react-router-dom";
import React, {useState} from "react";
import { useMemo } from 'react';

import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import {Box} from "@mui/material";
import Button from "react-bootstrap/Button";
import Editarticle from "./Editarticle.jsx";



const Displayarticles = ({articles, handleDelete, modifArticle}) => {
    const[art,setArt]=useState([]);


    const columns = useMemo(
        () => [
            {
                accessorKey: 'imageart', //access nested data with dot notation
                header: 'Image',
                Cell: ({ cell}) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <img
                            alt=""
                            height={100}
                            src={cell.getValue()}
                            loading="lazy"
                            style={{ borderRadius: '20%' }}
                        />

                    </Box>),
            },
            {
                accessorKey: 'reference', //access nested data with dot notation
                header: 'Référence',
                size: 80,
            },
            {
                accessorKey: 'designation',
                header: 'Désignation',
                size: 100,
            },
            {
                accessorKey: 'marque', //normal accessorKey
                header: 'Marque',
                size: 80,
            },
            {
                accessorKey: 'prix',
                header: 'Prix',
                size: 80,
            },
            {
                accessorKey: 'qtestock',
                header: 'Stock',
                size: 80,

            },
            {
                accessorKey: 'scategorieID.nomscategorie',
                header: 'Sub Category',
                size: 80,

            },
            {
                accessorKey: '_id',
                header: '',
                size: 50,
                Cell: ({ cell, row }) => (
                    <div >
                        <Editarticle art={cell.row.original} modifArticle={modifArticle}/>
                        <Button
                            onClick={(e) => {
                                handleDelete(cell.row.original._id,cell.row.original.reference,e);

                            }}
                            variant="danger"
                            size="lg"
                            className="text-danger btn-link delete"
                        >
                            <i className="fa fa-trash" />
                        </Button>
                    </div>
                ),
            },

        ],
            [articles],

    );

    const table = useMaterialReactTable({
        columns,
        data:articles, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

    });
    return (
        <div>

            <MaterialReactTable table={table} />
        </div>
    );
}
export default Displayarticles;