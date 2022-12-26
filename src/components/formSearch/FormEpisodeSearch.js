import { useFormik } from "formik";
import { Input, Button, HStack, Center } from "@chakra-ui/react";

export const FormEpisodeSearch = ({pageNumber,
  setPageNumber,
  setName,
  setEpisodeCode
}) => {
    const formik = useFormik({
        initialValues: {
          nombre: '',
          episodeCode: ''
        },
        onSubmit: (values) => {
          console.log(values);
          setName(values.nombre);
          setEpisodeCode(values.episodeCode);
          setPageNumber(1);
        },
        onReset:() => {
          setName('');
          setEpisodeCode('');
          setPageNumber(1);
        },
    });

  return (
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <HStack>
          <Center w='80%' h='50px'>
            <label>Episodio</label>
            <Input
              id='nombre'
              name='nombre'
              type='text'
              placeholder="Nombre del Episodio"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
          </Center>
          <Center w='80%' h='50px'>
            <label>C&oacute;digo</label>
            <Input
              id='episodeCode'
              name='episodeCode'
              type='text'
              placeholder="C&oacute;digo del Episodio"
              onChange={formik.handleChange}
              value={formik.values.episodeCode}
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