import Links from "./links";

export default function Nav() {
  return (
   <nav class="relative bg-gray-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
        
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> 
                <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                    <Links />
                </div>
            </div>
        </div>
        </div>
    </div>

    <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
            <Links />
        </div>
    </el-disclosure>
    </nav>
  );
}