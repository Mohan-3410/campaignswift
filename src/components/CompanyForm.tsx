import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CompanyForm() {
  return (
    <form className="space-y-6">
        
      <div className="relative group">
        <label className="absolute -top-2.5 left-3 mb-2 bg-white px-1 group-focus-within:text-primary block text-sm transition-colors duration-200  text-gray-600 ">Company name</label>
        <Input className="w-full" placeholder="Enter company name" />
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative group mt-2 col-span-1">
          <label className="absolute -top-2.5 left-3 bg-white px-1 group-focus-within:text-primary mb-2 block text-sm text-gray-600">Type</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="corporation">Corporation</SelectItem>
              <SelectItem value="llc">LLC</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative group mt-2 col-span-2">
          <label className="absolute -top-2.5 left-3 bg-white px-1 group-focus-within:text-primary mb-2 block text-sm text-gray-600">Company size</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose the size of your company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="500+">500+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pt-3">
        <Input className="w-full" placeholder="Address" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative group mt-2">
          <label className="absolute -top-2.5 left-3 bg-white px-1 group-focus-within:text-primary mb-2 block text-sm text-gray-600">Country</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-2">
          <Input placeholder="City" />
        </div>
      </div>

      <div className="pt-8 flex justify-between">
        <Button variant="outline">Previous step</Button>
        <Button>Next step</Button>
      </div>
    </form>
  );
}