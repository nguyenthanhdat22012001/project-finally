import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';


import FormCategory from '../components/FormCategory';
import FormEditCategory from '../components/FormEditCategory';
import TableListCategory from '../components/TableListCategory';
import ProccessDialog from "components/dialog/ProccessDialog";
import TableSkeleton from "components/skeleton/TableSkeleton";
//noti
import { useSnackbar } from 'notistack';
//helper
import {handleNotiDialog} from "helper/notify";
// api
import categoryApi from "api/categoryApi";


function ListCategoryAdminPage() {
  const [isLoadFetchApiSuccess, setIsLoadFetchApiSuccess] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [editCategory, setEditCategory] = useState({ isEdit: false, category: null });
  const [isProccess, setIsProccess] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  /*************** loading page when get list category ************/
  useEffect(async () => {
    await handleGetListCategory();
  }, [])
  /************** handle get list category ***************/
  const handleGetListCategory = async () => {
    try {

      if (isLoadFetchApiSuccess) {
        setIsLoadFetchApiSuccess(false);
      }

      const res = await categoryApi.getCategoryAll();
      if (res.success) {
        const newListCategory = res.data.map(item => {
          return {
            ...item,
            action: { cate_id: item.id, cate_name: item.name },
          }
        });

        setListCategory([...newListCategory]);
        setIsLoadFetchApiSuccess(true);
        console.log(res.data);
      }

    } catch (error) {
      console.log('error: ' + error);
    }
  };
  /************** handle  edit category ***************/
  const handleEditFalse = () => {
    setEditCategory({ ...editCategory, isEdit: false, category: null })
  }

  /************** handle add category ***************/
  const handleAddCategory = async (data) => {
    try {
      setIsProccess(true);

      const res = await categoryApi.addCategory(data);
      if (res.success) {
        await handleGetListCategory();
        setIsProccess(false);
        handleNotiDialog(enqueueSnackbar,'thêm danh mục thành công', 'success');
      };


    } catch (error) {
      console.log('error: ' + error);
    }
  };


  /************** handle delete category ***************/
  const handleDeleteCategory = async (id) => {

    try {
      setIsProccess(true);

      const res = await categoryApi.deleteCategory(id);
      if (res.success) {
        handleGetListCategory();
        setIsProccess(false);
        handleNotiDialog(enqueueSnackbar,'xóa danh mục thành công', 'success');
      }


    } catch (error) {
      console.log('error: ' + error);
    }
  };

  /************** handle  edit category ***************/
  const handleEditCategory = async (id) => {
    try {
      setIsProccess(true);

      const res = await categoryApi.getCategoryById(id);
      if (res.success) {
        setEditCategory({ ...editCategory, isEdit: true, category: res.data });
        setIsProccess(false);
      }

    } catch (error) {
      console.log('error: ' + error);
    }
  }
  /************** handle update category ***************/
  const handleUpdateCategory = async (id, data) => {

    try {
      setIsProccess(true);

      const res = await categoryApi.updateCategory(id, data);
      if (res.success) {
        handleGetListCategory();
        setIsProccess(false);
        handleNotiDialog(enqueueSnackbar,'chỉnh sửa danh mục thành công', 'success');
      }

      console.log(res);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  return (
    <Grid container spacing={3}>
      {isProccess && <ProccessDialog />} {/* proccess page */}

      <Grid item xs={12} sm={6} md={6}>
        {
          isLoadFetchApiSuccess ?
            <TableListCategory
              listCategory={listCategory}
              handleDeleteCategory={handleDeleteCategory}
              handleEditCategory={handleEditCategory}
            />
            : <TableSkeleton />
        }

      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        {
          editCategory.isEdit ?
            <FormEditCategory
              key={editCategory.category.id}
              category={editCategory.category}
              handleUpdateCategory={handleUpdateCategory}
              handleEditFalse={handleEditFalse}
            /> :
            <FormCategory handleAddCategory={handleAddCategory} />
        }

      </Grid>

    </Grid>

  );
}

export default ListCategoryAdminPage;
