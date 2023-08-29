from django.utils.deprecation import MiddlewareMixin

class CorsMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        response["Access-Control-Allow-Origin"] = "http://localhost:3000"  
        response["Access-Control-Allow-Headers"] = "Content-Type, X-CSRFToken"
        response["Access-Control-Allow-Methods"] = "POST, GET, PUT, OPTIONS"
        response["Access-Control-Allow-Credentials"] = "true"
        return response