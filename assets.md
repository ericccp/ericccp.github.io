# firewalld configuration

## firewalld

## linux/services

### About firewalld

The firewall daemon groups rules into entities called zones. There are predefined zones, least trusted being drop and most trusted being trusted.

### Controlling the service

To install firewalld: `sudo yum install firewalld`

To enable firewalld: `sudo systemctl enable firewalld`

To start firewalld: `sudo systemctl start firewalld`

To stop firewalld: `sudo systemctl stop firewalld`

To check the status of firewalld: `sudo systemctl status firewalld`

To verify the service is running: `firewall-cmd --state`

To restart the firewall: `firewall-cmd --reload`

### View existing firewall rules

View default zone: `firewall-cmd --get-default-zone`

List active zones: `firewall-cmd --get-active-zones`

List rules for default zone: `firewall-cmd --list-all`

List all zones: `firewall-cmd --get-zones`

List rules for different zone: `firewall-cmd --zone={zone} -—list-all`

List all rules for all zones: `firewall-cmd --list-all-zones | less`

### Adjusting firewall rules

To add a service: `firewall-cmd --zone={zone} —add-service={service}`

Example: `sudo firewall-cmd --zone=public —-add-service=https`

This will allow web traffic on port 80 in the public zone.

To add a specific port: `firewall-cmd --zone={zone} —-add-port={number}/{type}`

Example: `firewall-cmd --zone=public —-add-port=5000/tcp`

This will allow traffic on port 5000 in the public zone. Remember to add “—permanent” to make these changes persist through a reload.

### Configuration file

The configuration file is located at: `/etc/firewalld/firewalld.conf`

### firewalld custom service management

Services can be added by name to make managing services easier. This is a best practice for rule management. Manually adding ports without definition is not advised.

To define custom services, copy an existing service xml config file: `sudo cp /usr/lib/firewalld/services/ssh.xml /etc/firewalld/services/example.xml`

Edit the file to define your custom service. Reload firewalld to make the new service available by name.

### Troubleshooting firewalld

You can check for listening network ports using: `netstat -tulpn`

Search for a specific port number using: `netstat -tulpn | grep {port}`

