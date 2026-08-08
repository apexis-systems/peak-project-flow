import type { BlogApiResponse } from "@/types/blog";

const API_URL = import.meta.env.VITE_API_URL;

export async function getBlogs(): Promise<BlogApiResponse[]> {
  const res = await fetch(`${API_URL}/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export async function getBlogById(id: string | number): Promise<BlogApiResponse> {
  const res = await fetch(`${API_URL}/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}
