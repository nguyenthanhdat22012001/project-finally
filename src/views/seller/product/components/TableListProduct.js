import { useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useHistory } from "react-router-dom";

//helper
import { fCurrencyVN,fPercent } from "helper/FormatNumber";

import ConfirmDialog from 'components/dialog/ConfirmDialog';

const baseUrl = '/seller';

TableListProduct.propTypes = {
    handleDeleteProduct: PropTypes.func,
    listProduct: PropTypes.array,
}
TableListProduct.defaultProps = {
    listProduct: [],
}

function TableListProduct(props) {
    const history = useHistory();
    const { listProduct, handleDeleteProduct } = props;
    const [dialogDelete, setDialogDelete] = useState({ openDialog: false, message: '', isDelete: false, idDelete: null });

    const columns = [
        { field: 'id', hide: true },
        {
            field: 'img',
            headerName: '',
            width: 110,
            renderCell: (params) => (<div><Avatar variant="square" sx={{ width: 56, height: 56 }} alt="" src={params.value} /></div>)
        },
        {
            field: 'name',
            headerName: 'Tên sản phẩm',
            width: 200,
        },
        // {
        //     field: 'totalQuanty',
        //     headerName: 'Số lượng tồn kho',
        //     width: 150,
        // },
        {
            field: 'price', headerName: 'Giá sản phẩm', width: 110,
            renderCell: (params) => {
                return fCurrencyVN(params.value);
            }
        },
        {
            field: 'discount', headerName: 'Giảm giá', width: 110,
            renderCell: (params) => {
                return fPercent(params.value);
            }
        },
        {
            field: 'cate', headerName: 'Danh mục', width: 110,
            renderCell: (params) => {
                return (<p>{params.value.name}</p>)
            }
        },
        {
            field: 'brand', headerName: 'Thương hiệu', width: 110,
            renderCell: (params) => {
                return (<p>{params.value.name}</p>)
            }
        },
        {
            field: 'hide', headerName: 'Trạng thái', width: 110,
            renderCell: (params) => {
                if (params.value === 1) {
                    return <p>Ẩn</p>
                } else {
                    return <p>Hiện</p>
                }
            },
        },
        {
            field: 'action', headerName: '', width: 150,
            renderCell: (params) => (
                <strong>
                    <IconButton aria-label="" color="inherit" onClick={() => hanldeDirectEdit(params.value.pro_id)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        aria-label=""
                        color="inherit"
                        onClick={() => hanldeReportDeleteDialog(true, `Bạn có chắc muốn xóa khuyến mãi: "${params.value.pro_name}" ?`, params.value.pro_id)}>
                        <DeleteOutlineIcon />
                    </IconButton>
                </strong>
            ),
        },
    ];

    /************** handle report delete dialogDelete ***************/
    const hanldeReportDeleteDialog = (openDialog, message = '', id = null) => {
        setDialogDelete({ ...dialogDelete, openDialog: openDialog, message: message, idDelete: id });
    }
    /************** handle accept delete dialogDelete ***************/
    const hanldeAcceptDelete = () => {
        hanldeReportDeleteDialog(false);
        handleDeleteProduct(dialogDelete.idDelete);
    }
    const hanldeDirectEdit = (id) => {
        console.log('edit');
        history.push(`${baseUrl}/product/edit/${id}`)
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={listProduct}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
            {/* dialogDelete delete */}
            <ConfirmDialog
                dialogDelete={dialogDelete}
                hanldeReportDeleteDialog={hanldeReportDeleteDialog}
                hanldeAcceptDelete={hanldeAcceptDelete}
            />
        </div>
    )
}

export default TableListProduct;

