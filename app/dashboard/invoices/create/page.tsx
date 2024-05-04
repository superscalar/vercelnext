import { CreateInvoiceForm } from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
	const customers = await fetchCustomers();

	return (
		<main>
		
			{/* breadcrumbs is rendered as a nav with an ol inside. it's the title, nesting the path separated by slashes */}
			<Breadcrumbs
				breadcrumbs={[
				  { label: 'Invoices', href: '/dashboard/invoices' },
				  {
					label: 'Create Invoice',
					href: '/dashboard/invoices/create',
					active: true,
				  },
				]}
				/>
				
				
			<CreateInvoiceForm customers={customers} />
		</main>
	);
}