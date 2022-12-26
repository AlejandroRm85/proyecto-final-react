import { useFormik } from "formik";
import { Input, Button, Box, HStack, Center } from "@chakra-ui/react";

export const FormLocationSearch = ({pageNumber,
  setPageNumber,
  setName,
  setType,
  setDimension
}) => {
    const formik = useFormik({
        initialValues: {
          nombre: '',
          tipo: '',
          dimension: ''
        },
        onSubmit: (values) => {
          console.log(values);
          setName(values.nombre);
          setType(values.tipo);
          setDimension(values.dimension);
          setPageNumber(1);
        },
        onReset:() => {
          setName('');
          setType('');
          setDimension('');
          setPageNumber(1);
        },
    });

  return (
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <HStack>
          <Center w='80%' h='50px'>
            <label>Locaci&oacute;n</label>
            <Input
              id='nombre'
              name='nombre'
              type='text'
              placeholder="Nombre de Locai&oacute;n"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
          </Center>
          <Center w='80%' h='50px'>
            <label>Tipo</label>
            <Input
              id='tipo'
              name='tipo'
              type='text'
              placeholder="Tipo Locaci&oacute;n"
              onChange={formik.handleChange}
              value={formik.values.tipo}
            />
          </Center>
          <Center w='80%' h='50px'>
            <label>Dimensi&oacute;n</label>
            <Input
              id='dimension'
              name='dimension'
              type='text'
              placeholder="Nombre dimensi&oacute;n"
              onChange={formik.handleChange}
              value={formik.values.dimension}
            />
          </Center>
          <Center w='80%' h='50px'>
            <Button type='submit'>Buscar</Button>
            <Button type="reset" onClick={formik.handleReset}>Limpiar</Button>
          </Center>
        </HStack>
      </form>
  )
}