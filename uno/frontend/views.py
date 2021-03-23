from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "frontend/index.html"


class BlogView(TemplateView):
    template_name = "frontend/blog.html"

class BlogPostView(TemplateView):
    template_name = "frontend/blogpost.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["blogid"] = self.kwargs["pk"]
        return context
