const base = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "");
export class ApiError extends Error { status:number; constructor(message:string,status:number){super(message);this.status=status;} }
export async function api<T>(path:string, options:RequestInit={}):Promise<T>{
  if(!base) throw new Error("Website configuration missing: set VITE_API_BASE_URL in Vercel and redeploy.");
  const response=await fetch(`${base}${path}`,{...options,credentials:"include",headers:{"Content-Type":"application/json",...(options.headers||{})}});
  const data=await response.json().catch(()=>({error:"Backend returned an invalid response."}));
  if(!response.ok) throw new ApiError(data.error||"Request failed.",response.status);
  return data as T;
}
export const backendConfigured=Boolean(base);