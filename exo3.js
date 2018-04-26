let c = require('casting');
let i = 1;
let j = 21;
let k = 1;

while (i <= j)
{
	let l = 1;
	while (l <= k && i <= j)
	{
		print(i);
		print(' ');
		i++;
		l++;
	}
	print('\n');
	k++;
}

function print(j)
{
	process.stdout.write(c.cast('string', j));
}