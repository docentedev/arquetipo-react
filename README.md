# Arquetipo App React para Microfront

- escrita con typescript
- basada en un diseño modular
- basada en componentes

## Acuerdos
- no deben existir dependencias a librerias externas en el codigo, utilizar `wrappers` para esto
- textos deben estar parametrizados
- rutas deben estar parametrizadas
- configuraciones deben ser declaradas como variables de ambiente
- preferir componentes 100% funcionales
- Utilización de JSDOC pero sin sobre documentar, ejemplo:
```javascript

/**
 * @author Juan Peréz <user@domain.com>
 * @since v1.0.0
 * @version v1.0.0
 * @param props
 */
```
- preferir utilizacion de `type` en los `props` de componentes sobre `prop-types`
