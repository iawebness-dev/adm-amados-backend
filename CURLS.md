# API CURL Commands

**Base URL:** `http://localhost:3000`

> **Nota:** Reemplaza `<TOKEN>` con el token JWT obtenido en el login

---

---

# ===== USUARIOS =====

# Registrar

curl -X POST http://localhost:3000/auth/register \
 -H "Content-Type: application/json" \
 -d '{"username":"Leonel","email":"leonel@example.com","password":"Secure123!","nombre":"Leonel","apellido":"Amado"}'

# Login (respuesta contiene "token")

curl -X POST http://localhost:3000/auth/login \
 -H "Content-Type: application/json" \
 -d '{"email":"leonel@example.com","password":"Secure123!"}'

# ===== VETERINARIAS (/api/veterinaria) =====

# Obtener todas (requiere token)

curl -X GET http://localhost:3000/api/veterinaria/ \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODM4ODI4NWZlYjMxNWMzNGJlNWIwNiIsInVzZXJuYW1lIjoibGVvbmVsIiwiZW1haWwiOiJsZW9uZWxAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJub21icmUiOiJMZW9uZWwiLCJhcGVsbGlkbyI6IkFtYWRvIiwiaWF0IjoxNzcxODc1MTY0LCJleHAiOjE3NzE5NjE1NjQsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.padcL_E3dcuyEcLAjIxDXF240OIVkqAhkjGJAoXnbGA"

# Obtener por ID (público)

curl -X GET http://localhost:3000/api/veterinaria/<VET_ID>

# Crear (ADMIN)

curl -X POST http://localhost:3000/api/veterinaria/ \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer <TOKEN>" \
 -d '{"name":"Veterinaria Central","direccion":"Av. Principal 500","telefono":"555-0001","email":"central@vet.com"}'

# Actualizar (ADMIN)

curl -X PUT http://localhost:3000/api/veterinaria/<VET_ID> \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer <TOKEN>" \
 -d '{"telefono":"555-8888","direccion":"Dirección Actualizada"}'

# Eliminar (ADMIN)

curl -X DELETE http://localhost:3000/api/veterinaria/<VET_ID> \
 -H "Authorization: Bearer <TOKEN>"

# -----------------------------------------------------------------------------------------------------------------------------------

# ===== MASCOTAS (/api/mascotas) =====

# Crear (requiere token)

curl -X POST http://localhost:3000/api/mascotas \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODM4ODI4NWZlYjMxNWMzNGJlNWIwNiIsInVzZXJuYW1lIjoibGVvbmVsIiwiZW1haWwiOiJsZW9uZWxAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJub21icmUiOiJMZW9uZWwiLCJhcGVsbGlkbyI6IkFtYWRvIiwiaWF0IjoxNzcxODc1MTY0LCJleHAiOjE3NzE5NjE1NjQsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.padcL_E3dcuyEcLAjIxDXF240OIVkqAhkjGJAoXnbGA" \
 -d '{"name":"Fidddo","duenoId":"698388285feb315c34be5b06","edad":4,"especie":"Perro","raza":"Labrador"}'

# Obtener todas (requiere token)

curl -X GET http://localhost:3000/api/mascotas \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODM4ODI4NWZlYjMxNWMzNGJlNWIwNiIsInVzZXJuYW1lIjoibGVvbmVsIiwiZW1haWwiOiJsZW9uZWxAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJub21icmUiOiJMZW9uZWwiLCJhcGVsbGlkbyI6IkFtYWRvIiwiaWF0IjoxNzcxODc1MTY0LCJleHAiOjE3NzE5NjE1NjQsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.padcL_E3dcuyEcLAjIxDXF240OIVkqAhkjGJAoXnbGA"

# Obtener por ID (público o con token según tu app)

curl -X GET http://localhost:3000/api/mascotas/699ca350ec84659ae0713546 \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODM4ODI4NWZlYjMxNWMzNGJlNWIwNiIsInVzZXJuYW1lIjoibGVvbmVsIiwiZW1haWwiOiJsZW9uZWxAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJub21icmUiOiJMZW9uZWwiLCJhcGVsbGlkbyI6IkFtYWRvIiwiaWF0IjoxNzcxODc1MTY0LCJleHAiOjE3NzE5NjE1NjQsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.padcL_E3dcuyEcLAjIxDXF240OIVkqAhkjGJAoXnbGA"

# Actualizar (requiere token)

curl -X PUT http://localhost:3000/api/mascotas/699ca350ec84659ae0713546 \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODM4ODI4NWZlYjMxNWMzNGJlNWIwNiIsInVzZXJuYW1lIjoibGVvbmVsIiwiZW1haWwiOiJsZW9uZWxAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJub21icmUiOiJMZW9uZWwiLCJhcGVsbGlkbyI6IkFtYWRvIiwiaWF0IjoxNzcxODc1MTY0LCJleHAiOjE3NzE5NjE1NjQsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.padcL_E3dcuyEcLAjIxDXF240OIVkqAhkjGJAoXnbGA" \
 -d '{"edad":5,"raza":"Labrador Retriever"}'

# Eliminar (requiere token)

curl -X DELETE http://localhost:3000/api/mascotas/699ca350ec84659ae0713546 \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODM4ODI4NWZlYjMxNWMzNGJlNWIwNiIsInVzZXJuYW1lIjoibGVvbmVsIiwiZW1haWwiOiJsZW9uZWxAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJub21icmUiOiJMZW9uZWwiLCJhcGVsbGlkbyI6IkFtYWRvIiwiaWF0IjoxNzcxODc1MTY0LCJleHAiOjE3NzE5NjE1NjQsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.padcL_E3dcuyEcLAjIxDXF240OIVkqAhkjGJAoXnbGA"

# ------------------------------------------------------------

# HISTORIAS CLINICAS

# Obtener todas (público)

curl -X GET "http://localhost:3000/api/historiaClinica/"

# Obtener por ID

curl -X GET "http://localhost:3000/api/historiaClinica/<HISTORIA_ID>"

# Obtener por mascota (query)

curl -X GET "http://localhost:3000/api/historiaClinica?mascotaId=<MASCOTA_ID>"

# Crear (admin)

curl -X POST "http://localhost:3000/api/historiaClinica/" \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODM4ODI4NWZlYjMxNWMzNGJlNWIwNiIsInVzZXJuYW1lIjoibGVvbmVsIiwiZW1haWwiOiJsZW9uZWxAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJub21icmUiOiJMZW9uZWwiLCJhcGVsbGlkbyI6IkFtYWRvIiwiaWF0IjoxNzcxODc1MTY0LCJleHAiOjE3NzE5NjE1NjQsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.padcL_E3dcuyEcLAjIxDXF240OIVkqAhkjGJAoXnbGA" \
 -d '{
"mascotaId": "698388285feb315c34be5b06",
"peso": 12,
"motivoConsulta": "Vacunación",
"diagnostico": "Sano",
"tratamiento": "Vacuna antirrábica",
"notas": "Control en 1 año"
}'

# Actualizar (admin)

curl -X PUT "http://localhost:3000/api/historiaClinica/699caf586ab4c9fea81510aa" \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODM4ODI4NWZlYjMxNWMzNGJlNWIwNiIsInVzZXJuYW1lIjoibGVvbmVsIiwiZW1haWwiOiJsZW9uZWxAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJub21icmUiOiJMZW9uZWwiLCJhcGVsbGlkbyI6IkFtYWRvIiwiaWF0IjoxNzcxODc1MTY0LCJleHAiOjE3NzE5NjE1NjQsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.padcL_E3dcuyEcLAjIxDXF240OIVkqAhkjGJAoXnbGA" \
 -d '{"diagnostico":"Leve alergia","tratamiento":"Antihistamínico"}'

# Eliminar (admin)

curl -X DELETE "http://localhost:3000/api/historiaClinica/699caf586ab4c9fea81510aa" \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODM4ODI4NWZlYjMxNWMzNGJlNWIwNiIsInVzZXJuYW1lIjoibGVvbmVsIiwiZW1haWwiOiJsZW9uZWxAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJub21icmUiOiJMZW9uZWwiLCJhcGVsbGlkbyI6IkFtYWRvIiwiaWF0IjoxNzcxODc1MTY0LCJleHAiOjE3NzE5NjE1NjQsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.padcL_E3dcuyEcLAjIxDXF240OIVkqAhkjGJAoXnbGA"
