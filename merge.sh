git pull origin master
cd /CMS/compliancemonitoringsystems.com
npm run build
rm -rf /var/www/compliancemonitoringsystems.com/build
mv build /var/www/compliancemonitoringsystems.com
cd /CMS/communitysupervision.org
npm run build
rm -rf /var/www/communitysupervision.org/build
mv build /var/www/communitysupervision.org
