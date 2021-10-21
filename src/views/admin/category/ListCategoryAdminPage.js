import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Header from '../../../components/admin/header/Header';
import FormCategory from '../../../components/admin/category/FormCategory';
import FormEditCategory from '../../../components/admin/category/FormEditCategory';
import TableListCategory from '../../../components/admin/category/TableListCategory';
import LoaderDialog from "../../../components/dialog/LoaderDialog";
import ProccessDialog from "../../../components/dialog/ProccessDialog";
//noti
import { useSnackbar } from 'notistack';

// api
import categoryApi from "../../../api/categoryApi";

const mdTheme = createTheme();




function ListCategoryAdminPageContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [listCategory, setListCategory] = useState([]);
  const [editCategory, setEditCategory] = useState({ isEdit: false, category: null });
  const [isProccess, setIsProccess] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  /*************** loading page when get list category ************/
  useEffect(() => {
    handleGetListCategory();

    const timeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeLoading)
    }
  }, [])

  /************** handle noti dialog***************/
  const handleNotiDialog = (message, status) => {
    enqueueSnackbar(message, {
      variant: status,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
    });
  };

  /************** handle get list category ***************/
  const handleGetListCategory = async () => {
    try {
      const res = await categoryApi.getCategoryAll();
      if (res) {
        const newListCategory = res.data.map(item => {
          return {
            ...item,
            action: { cate_id: item.id, cate_name: item.name },
          }
        });
        console.log(newListCategory);
        setListCategory([...newListCategory]);
        return true;
      }

    } catch (error) {
      console.log('error: ' + error);
    }
  };

  /************** handle add category ***************/
  const handleAddCategory = async (data) => {
    try {
      setIsProccess(true);

      const res = await categoryApi.addCategory(data);
      if (res) {
        handleGetListCategory()
        setIsProccess(false);
        handleNotiDialog('thêm danh mục thành công', 'success');
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
      if (res) {
        handleGetListCategory();
        setIsProccess(false);
        handleNotiDialog('xóa danh mục thành công', 'success')
      }


    } catch (error) {
      console.log('error: ' + error);
    }
  };

  /************** handle  edit category ***************/
  const handleEditCategory = async (id) => {
    try {
      setIsProccess(true);
      console.log(id)
      const res = await categoryApi.getCategoryById(id);
      if (res) {
        setEditCategory({...editCategory, isEdit: true, category: res.data});
        setIsProccess(false);
      }

      console.log(res);
    } catch (error) {
      console.log('error: ' + error);
    }
  }
  /************** handle update category ***************/
  const handleUpdateCategory = async (id) => {

    try {
      setIsProccess(true);

      const res = await categoryApi.getCategoryById(id);
      if (res) {
        handleGetListCategory();
        setIsProccess(false);
      }

      console.log(res);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  return (
    <ThemeProvider theme={mdTheme}>

      {isLoading && <LoaderDialog />} {/* load page */}
      {isProccess && <ProccessDialog />} {/* proccess page */}


      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Header titlePage={'Danh Mục Sản Phẩm'} />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6} md={6}>
                <TableListCategory
                  listCategory={listCategory}
                  handleDeleteCategory={handleDeleteCategory}
                  handleEditCategory={handleEditCategory}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                {
                editCategory.isEdit ? 
                <FormEditCategory category={editCategory.category} handleUpdateCategory={handleUpdateCategory}/> :
                <FormCategory handleAddCategory={handleAddCategory}/> 
                }
             
              </Grid>

            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function ListCategoryAdminPage() {
  return <ListCategoryAdminPageContent />;
}
