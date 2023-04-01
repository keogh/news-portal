import * as Yup from 'yup';

// TODO: Errores en español
export const itemSchema = Yup.object({
  title: Yup.string().required(),
  url: Yup
    .string()
    .when(
      'text',
      ([ text ], schema)  => {
        if (!!text && text !== '') {
          return schema.notRequired();
        }
        return schema.required();
      },
    ),
  text: Yup.string(),
});
